import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { } from '@redux-devtools/extension' // required for devtools typing

type FileType = ((string | number | boolean)[])

interface FileState {
    file: object[]
    setFile: (withContent: object[]) => void

    duplicateLastRow: () => void

}

const useFileStore = create<FileState>()(
    devtools(
        persist(
            (set) => ({
                file: [],
                setFile: (withContent) => set((state) => ({ file: withContent })),
                duplicateLastRow: () => set((state) => ({ file: [...state.file, ...state.file.slice(-1)] })),
            }),
            {
                name: 'file-storage',
            },
        ),
    ),
)

export default useFileStore