import {useParams} from 'react-router-dom'




export function Post(){
    const {id}= useParams();
    return <h2>PostID:{id}</h2>
}
