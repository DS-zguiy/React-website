import { createWithEqualityFn } from "zustand/traditional";

interface UserState {
  userInfo: any; //用户信息
  token: string;
  name: string;
  email: string;
  permissions: string; //登陆的身份
  setUser: (name: string, email: string) => void;
  clearUser: () => void;
  setUserInfo: (userInfo: any) => void;
  setPermissions: (permissions:string) => void,
}

const useUserStore = createWithEqualityFn<UserState>((set) => ({
  userInfo: {},
  name: "",
  email: "",
  token: "",
  permissions: "user",
  setUser: (name, email) => set({ name, email }),
  setPermissions: (permissions) => set({ permissions }),
  clearUser: () => set({ name: "", email: "" }),
  setUserInfo: (userInfo) => set({ userInfo }),
}));

export default useUserStore;
