import { useParams } from "react-router-dom"
export default function RecipePage({resources}){
    const {slug} = useParams()
    const resource = resources.find((res) => res.slug === slug)

    return (
        <section>
            <h1>{resource.title}</h1>
            <ul>
                {resource.ingredients.map((ingredient, index) =>(
                <li key={"ing"+index}>{ingredient}</li>
            ))}
            </ul>
            <ol>
                {resource.url.map((url, index) =>(
                    <li key={"url"+index}>{url}</li>
                ))}
            </ol>
        </section>
    )
}