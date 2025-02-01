import { Fragment } from "react"
import globe from "/public/assets/globe.png"
export default function Header(){
    return(
        <Fragment>
            <div className="Header">
                <img src={globe} alt="Globe png" className="Globe"/>
                <span>my travel journal</span>
            </div>
        </Fragment>
    )
}