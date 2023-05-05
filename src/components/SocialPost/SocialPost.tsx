import { Post } from "./Post"

export function SocialPosts( ){

    const [posts, setPosts] = useState<Post[ ]>([
        {
            title: 'The Action Tree', 
            thought: 'The action tree is the sequel to the giving tree'
        },
        {
            title: "The Action Tree the Movie",
            thought: "The action tree book's movie rights have already been sold",
        },

])


    return (
        <div>
        <div className="socialPosts-container">
        <ul>
                {posts.map(post) => (
                <PostInList title={post.title} thought={posts.thought}></PostInList>
                ))
        </ul>
        </div>
)
}