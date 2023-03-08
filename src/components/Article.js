import { useParams } from "react-router-dom"

export default function Article({resources}){

    const {slug} = useParams()
    const navn = resources.filter((resource) => resource.category === slug)

    console.log(navn)

    return(
        <>
        <h2>{slug.toUpperCase()}</h2>
        <ul>
            {navn.map((resource) =>(
                <li><a href={resource.url}>{resource.title}</a></li>
            ))}
        </ul>
        </>
    )
}