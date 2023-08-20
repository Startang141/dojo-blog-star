
import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const Home = () => {
    const {data : blogs, isPending, isError} = UseFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {isError && <div> {isError} </div>}
            {isPending && <div>LOADING....</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!'/>}
        </div>
     );
}
 
export default Home;