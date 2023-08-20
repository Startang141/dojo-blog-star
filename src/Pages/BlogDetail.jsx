import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const BlogDetail = () => {
    const { id } = useParams();
    const {data: blogs, isPending, isError} = UseFetch('http://localhost:8000/blogs/' + id );

    return ( 
        <div className="blog-detail">
            {isPending && <div>Loading...</div>}
            {isError && <div>{ isError }</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p> Written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetail;