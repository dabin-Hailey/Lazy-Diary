import axios from "axios";
import { auth, db, storage } from "../firebase.config";
import { signOut } from "firebase/auth";
import {
  doc,
  collection,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  updateDoc
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { DiaryInputs } from "../@types/types";

const currentUser = JSON.parse(localStorage.getItem("userData") || "{}");

//구글 로그아웃
export const handleGoogleLogout = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("userData");
    })
    .catch((error) => {
      console.log("구글 로그아웃 에러", error);
    });
};

//카카오 로그아웃 (이 서비스만 로그아웃 - 카카오 로그인 캐시는 남아있음)
export const handleKakaoLogout = () => {
  axios
    .post(
      "https://kapi.kakao.com/v1/user/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${currentUser.access_token}`,
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
        }
      }
    )
    .then(() => {
      localStorage.removeItem("userData");
    })
    .catch((error) => console.log("카카오 로그아웃 에러", error));
};

//파이어베이스 utils
//추가
export const setData = async (userId: string | null, props: DiaryInputs) => {
  const collectionName = `user-${userId}`;
  const docId = `${userId}-${new Date().getTime()}`;
  const docRef = doc(db, collectionName, docId);

  await setDoc(docRef, props);
};

//수정
export const updateData = async (
  userId: string | null,
  id: string,
  props: Omit<DiaryInputs, "id">
) => {
  const collectionName = `user-${userId}`;
  const docId = `${userId}-${id}`;
  const docRef = doc(db, collectionName, docId);

  await updateDoc(docRef, props);
};

//삭제
export const deleteData = async (userId: string, id: string) => {
  const collectionName = `user-${userId}`;
  const docId = id;

  await deleteDoc(doc(db, collectionName, docId));
};

//모든 문서 읽기
export const getData = async (
  collectionName: string
): Promise<DiaryInputs[]> => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const docs = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id
    };
  });
  return docs;
};

//문서 하나 읽기
export const getDataByField = async (collectionName: string, docId: string) => {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {
      ...docSnap.data(),
      id: docSnap.data().id as string
    };
  }
};

//이미지 추가
export const addImage = (image: File) => {
  return new Promise<string | undefined>((resolve, reject) => {
    const filename = Date.now();
    const imageRef = ref(storage, `images/${filename}`);
    const uploadTask = uploadBytesResumable(imageRef, image);

    uploadTask.on(
      "state_changed",
      null,
      (error) => reject(error),
      async () => {
        try {
          const imageURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(imageURL);
        } catch (error) {
          reject(error);
        }
      }
    );
  });
};
