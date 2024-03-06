import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    const{Logo,name}=bookmark;
    return (
        
        <div >
            
            
            
            <div className='flex gap-4'>
            <img src={Logo} alt="" />
            <p>{name}</p>

            </div>

        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object

}


export default Bookmark;