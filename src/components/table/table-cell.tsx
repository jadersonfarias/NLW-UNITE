import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge"; //serve para poder mandar um componente className mantendo o daqui

interface TableCellProps extends ComponentProps<'td'>{}

export function TableCell(props:TableCellProps){
    return(
        <td  {...props} className={twMerge("py-3 px-4 text-sm text-zinc-300", props.className)} /> //...props tem que ficar em primeiro
    )
}