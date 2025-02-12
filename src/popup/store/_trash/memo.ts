import { create } from "zustand";

export const useMemosStore = create((set) => ({
  memo: "",
  setMemo: (text) => set({ memo: text }),
  memos: [],
  setMemos: (newMemo) =>
    set((prev) => ({
      memos: [...prev.memos, newMemo],
    })),
}));

// const { memo, setMemo, setMemos } = useMemosStore();
