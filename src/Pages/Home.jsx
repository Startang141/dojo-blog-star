import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [isError, setIsError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            if(!res.ok){
                throw Error('Could Not Fetch Data')
            }
            return res.json();
        }).then((data)=> {
            setBlogs(data);
            setIsPending(false);
            setIsError(null);
        }).catch((err)=> {
            setIsPending(false);
            setIsError(err.message)
        })
    }, [])

    return ( 
        <div className="home">
            {isError && <div> {isError} </div>}
            {isPending && <div>LOADING....</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!'/>}
        </div>
     );
}
 
export default Home;