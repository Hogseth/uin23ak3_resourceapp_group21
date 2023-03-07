import Article from './Article';
import resources from '../resources/ressurser';
import { Link } from "react-router-dom";

export default function main(){
    return(
        <>
            {resources.map((resource) => (

                <Link to={resource.title}>
                    <Article title={resource.title}/>
                </Link>
        ))}
    
    
    
        </>
    );
}