import React, { PropsWithChildren } from "react"
import './button.css'
type ButtonType = {
    variant: "green" | "red" | "blue"
}

export function Button(props: PropsWithChildren<ButtonType>){
    let {variant = 'green',children} = props
    return(
        <button className={`btn ${variant}`}>
            {children}
        </button>
    )
} 