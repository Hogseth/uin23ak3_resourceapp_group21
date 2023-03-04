import { useParams } from "react-router-dom"

export default function Article({resources}){
    const {slug} = useParams()
    const resource = recources.find((rec) => rec.slug === slug)

    return(
        <section>
            <h1>{resource.category}</h1>
            <ul>
                {resource.url.map((url, index) =>(
                <li key={"url"+index}>{url}</li>
            ))}
            </ul>
        </section>
    )
}