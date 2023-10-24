export interface UserData {
  id: string | null;
  nickName: string | null;
  photoURL: string | null;
  recentLoginLog: number | null;
  platform: string | null;
  access_token?: string | null;
}

export interface DiaryInputs {
  title: string;
  date: number;
  feeling: string;
  weather: string;
  meeting: string;
  activity: string;
  post?: string | undefined;
  photoName?: string | undefined;
  photoURL?: string | undefined;
}
