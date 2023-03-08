import { Link } from "react-router-dom"
import resources from "../resources/ressurser"

export default function Button(){
    return (
        <div className="buttons">
        <Link to="html">HTML</Link>
        <Link to="css">CSS</Link>
        <Link to="javascript">JAVASCRIPT</Link>
        <Link to="react">REACT</Link>
        <Link to="headless-css">HEADLESS-CMS</Link>
        </div>
    )
}
