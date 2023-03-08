import { Link, useParams } from "react-router-dom"

export default function Button({resources}){


    const {slug} = useParams()

    return (
        <div className="buttons">
        <Link to="html" className={slug === "html" ? "activeBtn" : "inactiveBtn"}>HTML</Link>
        <Link to="css" className={slug === "css" ? "activeBtn" : "inactiveBtn"}>CSS</Link>
        <Link to="javascript" className={slug === "javascript" ? "activeBtn" : "inactiveBtn"}>JAVASCRIPT</Link>
        <Link to="react" className={slug === "react" ? "activeBtn" : "inactiveBtn"}>REACT</Link>
        <Link to="headless-cms" className={slug === "headless-cms" ? "activeBtn" : "inactiveBtn"}>HEADLESS-CMS</Link>
        </div>
    )
}
