import { create } from 'zustand'

type Store = {
    count: number
    theme: boolean,
    increment: () => void
    decrement: () => void
    mode: () => void
}

const useStore = create<Store>()((set) => ({
    count: 1,
    theme: true,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    mode: () => set((state) => ({ theme: !state.theme })),
}))

export default useStore;

