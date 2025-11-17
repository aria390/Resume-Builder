import { create } from "zustand";

type TrueOrFalse = {
  isOpenLogin: boolean;
  setIsOpenLogin: (v: boolean) => void;
};

const useTrueOrFalse = create<TrueOrFalse>((set) => ({
  isOpenLogin: false,
  setIsOpenLogin: (v) => set(() => ({ isOpenLogin: v })),
}));
export default useTrueOrFalse;
