import Header from "./Header.jsx"
import Entry from "./entry.jsx"
import "./style.css"
import { Fragment } from "react"
import {  createRoot  } from "react-dom/client"
import Data from "./data.js"

const apping=Data.map((Smthn) => {return <Entry 
    key={Smthn.id} 
    {...Smthn}
    />}
)

createRoot(document.querySelector("#root")).render(
<Fragment>
    <Header/>
    <div>{apping}</div>
</Fragment>)