import { Post } from "../SocialPost/Post"

export function PostInList(props: {title: string, thought: string}){
    return (
    <li className = "postInList">
        <div><h3>{props.post.title}</h3><p>{props.post.thought}</p>
        </div>

    </li>
    )
}