import React, { useCallback } from 'react'
import useFileStore from '../../../stores/file-store'
import { TableRow } from './TableRow'

type TableProps = {
    // content: object[]
}

const Table = (props: TableProps) => {

    const store = useFileStore()


    return (
        <div class="w-[1000px] background-color: var(--color-red-50)">
            {store.file && store.file.map((row) => {
                return <TableRow content={row} />
            }
            )}
        </div>
    )
}

export default Table