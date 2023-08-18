import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blog, setBlog] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlog = blog.filter((blog) => blog.id !== id);
        setBlog(newBlog);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blog} title='All Blogs!' handleDelete={handleDelete}/>
            {/* <BlogList blogs={blog.filter((blog)=> blog.author === 'mario')} title='All Blogs!'/> */}
        </div>
     );
}
 
export default Home;