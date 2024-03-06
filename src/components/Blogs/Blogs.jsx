import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookMarks, handleMarkedTime}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            <h3>Blogs:{blogs.length}</h3>
            {
                blogs.map(blog=><Blog 
                    key={blog.id}
                    blog={blog}
                    handleBookMarks={handleBookMarks}
                    handleMarkedTime={handleMarkedTime}
                
                
                ></Blog>)
            }

            
        </div>
    );
};
Blogs.propTypes={
    handleMarkedTime:PropTypes.func,
    handleBookMarks:PropTypes.func

}

export default Blogs;