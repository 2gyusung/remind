import { create } from 'zustand'

interface IUseCountStore {
    count: number
    setCount: (newCount: number) => void
}

export const useCountStore = create<IUseCountStore>((set) => ({
    count: 0,
    setCount: (newCount: number) => set(() => ({ count: newCount }))
}))