import { create } from 'zustand';

const useStore = create((set) => ({
  content: null,
  setContent: (data) => set(() => ({ content: data })),
}));

export default useStore;
