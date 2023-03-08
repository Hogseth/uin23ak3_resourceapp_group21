import { useParams } from "react-router-dom"

export default function Resources({resources}){

    const {slug} = useParams()
    const res = resources.filter((resource) => resource.category === slug)

    return(
        <div className="article">
        <h2>{slug.toUpperCase()}</h2>
        <ul>
            {res.map((resource, index) =>(
                <li key={index}><a href={resource.url}>{resource.title}</a></li>
            ))}
        </ul>
        </div>
    )
}