import React, { useCallback } from 'react'
type TableRowProps = {
    content: object
}

export const TableRow = (props: TableRowProps) => {



    return (
        <div class="w-full h-[100px] flex">
            {
                Object.entries(props.content).map(([key, value]) => {
                    return <div class="w-[200px] h-full flex-1">{value}</div>
                })
            }
        </div>
    )
}
