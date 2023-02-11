import React from "react"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import data from "./data/data"
import "./styles.css"

export default function App(){
    const dataElements = data.map(item => {
        return(
            <Body key={item.id}
                {...item} />
        )
    })
    return(
        <div>
            <Navbar />
            {dataElements}
        </div>
    )
}