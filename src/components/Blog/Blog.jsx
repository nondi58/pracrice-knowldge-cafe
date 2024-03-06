import React from 'react';
import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({blog,handleBookMarks,handleMarkedTime}) => {
    // console.log(blog);
    const{name,cover,picture,title,Logo,author,reading_time,user}=blog
    return (
        <div className='mb-20 space-y-4 w-auto'>
            <img className='w-2/4' src={picture} alt={`cover picture of the title ${title}`} />

            <div className='mt-6 mb-3 flex justify-between'>
                <div className='flex ml-2 gap-3'> 
                    <img className='w-14 rounded-full' src={author} alt="" />
                <h6>{name}</h6>
                </div>
                <div>
                     <span>{reading_time}min read</span>
                     <button onClick={()=>handleBookMarks(blog)}><FaBookmark></FaBookmark></button>
                     
                </div>
            </div>
            <h3>{user}</h3>
            <p>
                {
                    
                }
            </p>
            <button onClick={()=>handleMarkedTime(reading_time)} className='bg-purple-800 underline color-white'>mark as read</button>
            
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired

}

export default Blog;