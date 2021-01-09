import React, { useContext } from 'react'
import style from './mainpane.module.css'
import { namectx } from "../../context"


export const Pane = (props) => { 
    const [ name, changename ] = useContext(namectx);
    return(
        <div className={style.Pane}>
        <div className={style.Head}>
            <div className={style.Controls}>
                <div 
                className={[style.Controls_item,style.Controls_green].join(" ")}
                onClick={props.close}
                >
                    &gt;
                </div>
                <div className={[style.Controls_item,style.Controls_grey].join(" ")}>_</div>
                <div className={[style.Controls_item,style.Controls_red].join(" ")}>X</div>
                
            </div>
        </div>
        <div>
            <h2>{props.title}</h2>
            <h2 onClick={() => {
                changename("Olatunji")
            }}>{name}</h2>
        </div>
        </div>
    )
} 