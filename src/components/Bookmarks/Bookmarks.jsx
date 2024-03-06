import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div>
            <h2>Reading time:{readingTime}</h2>
            <br />

            <h4>BookMarks:{bookmarks.length}</h4>
            {
                bookmarks.map(bookmark=><Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}
                    readingTime={readingTime}
               
                
                ></Bookmark>)

            }
            
        </div>
    );
};
Bookmarks.propTypes={
    
        bookmarks:PropTypes.array,
        readingTime:PropTypes.number
    
    

}



export default Bookmarks;