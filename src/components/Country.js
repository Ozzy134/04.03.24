import React from "react";

export const Country = ({country}) =>{

    let a = 10
    let b = 15

    let arr = [1,2,3,4,5]

    return(
        <>
            <h2>Country: {country.name}</h2>
            <h1>Population: {country.population}</h1>

            <h3>Number 1: {12+12}</h3>

            <h4>Number 2: {Math.round(Math.random()*100)}</h4>

            <h5>{arr[0]}</h5>
        </>
    )
}