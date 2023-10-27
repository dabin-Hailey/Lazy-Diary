export interface UserData {
  id: string | null;
  nickname: string | null;
  photoURL: string | null;
  recentLoginLog: number | null;
  platform: string | null;
  access_token?: string | null;
}

export interface DiaryInputs {
  key?: string;
  id: string;
  title?: string;
  year?: number;
  month?: number;
  date?: number;
  day?: string;
  feeling?: string;
  weather?: string;
  meeting?: string;
  activity?: string;
  post?: string | undefined;
  photoURL?: string | undefined;
}

export interface UpdateInputs {
  title: string;
  feeling: string;
  weather: string;
  meeting: string;
  activity: string;
  post?: string | undefined;
  photoURL?: string | undefined;
}
