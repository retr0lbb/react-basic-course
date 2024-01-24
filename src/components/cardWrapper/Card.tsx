import React from "react"
import "./Card.css"



interface CardProps{
    title?: string,
    color?: string,
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) =>{
    return(
        <div className="Card" style={{
            backgroundColor: props.color,
            borderColor: props.color || "#f00"
        }}>
            <h1 className="Title">{props.title}</h1>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}

export default Card;