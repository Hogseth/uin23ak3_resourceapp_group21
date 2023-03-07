import { useParams } from "react-router-dom";
export default function ResourcePage({resources}){
    
    const {category} = useParams()
    const resource = resources.find((res) => res.category === category)

    return (
        <section>
            <h1>{resource.title}</h1>
            <ul>
                {resource.url.map((url, index) =>(
                    <li key={"url"+index}>{url}</li>
                ))}


            </ul>
        
        

        </section>
    )
}