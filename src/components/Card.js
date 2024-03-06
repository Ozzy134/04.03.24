import React from "react";
import './Card.css'

export const Card = (props) => {
        if(props.show){
            return(
                <div className="Card">
                    <h2 onClick={() => props.click(props.name)}>Name: {props.name}</h2>
                    <h3>Color: {props.color}</h3>
                    <h4>Описание:</h4>
                    <p>fwefewf</p>
                </div>
            )
        } else {
            return(
                <div className="Card">
                    <h2 onClick={() => props.click(props.name)}>Name: {props.name}</h2>
                    <h3>Color: {props.color}</h3>
                </div>
            )
        }
}