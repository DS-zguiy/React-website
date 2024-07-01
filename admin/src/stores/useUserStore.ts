import { createWithEqualityFn } from "zustand/traditional";

interface UserState {
  token: string;
  name: string;
  email: string;
  setUser: (name: string, email: string) => void;
  clearUser: () => void;
}

const useUserStore = createWithEqualityFn<UserState>((set) => ({
  name: "",
  email: "",
  token: "",
  setUser: (name, email) => set({ name, email }),
  clearUser: () => set({ name: "", email: "" }),
}));

export default useUserStore;
