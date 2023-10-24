import axios from "axios";
import { auth, db, storage } from "../firebase.config";
import { signOut } from "firebase/auth";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

interface DiaryProps {
  title: string;
  date: string;
  feeling: string;
  weather: string;
  meeting: string;
  activity: string;
  post?: string;
  photoName?: string;
  photoURL?: string;
}

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

//카카오 로그아웃
export const handleKakaoLogout = () => {
  const currentUser = JSON.parse(localStorage.getItem("userData") || "{}");

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
    .then((response) => {
      localStorage.removeItem("userData");
    })
    .catch((error) => console.log("카카오 로그아웃 에러", error));
};

//파이어베이스 utils
//추가
export const setData = async (userId: string, props: DiaryProps) => {
  const date = new Date();
  const dataId = `${userId}-${date.getTime()}`;

  await setDoc(doc(db, userId, dataId), props);
};

//읽기
export const getData = async (collectionName: string, dataId: string) => {
  const docSnap = await getDoc(doc(db, collectionName, dataId));

  const diaryData = docSnap.data();
  console.log(diaryData);
};

//수정
export const updateData = async (
  collectionName: string,
  dataId: string,
  props: DiaryProps
) => {
  await setDoc(doc(db, collectionName, dataId), props);
};

//삭제
export const deleteData = async (collectionName: string, dataId: string) => {
  await deleteDoc(doc(db, collectionName, dataId));
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
