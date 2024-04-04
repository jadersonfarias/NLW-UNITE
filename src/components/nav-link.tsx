import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'> { //essa linha faz a tipagem e faz o componente navlink poder receber todas as propriedades de um link
    children: string
}

export function NavLink(props:NavLinkProps){
    return(
        <a {...props}  className="font-medium text-sm">
            {props.children}
        </a>
    )
}