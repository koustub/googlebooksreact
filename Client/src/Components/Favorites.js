import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import SavedBooks from './savedBooks';

function Favorites(){
    const [savedBooks,setSavedBooks] = useState([]);
   window.onload = getBook() ;
    async function getBook(){
        const getBooks = await Axios.get('/api/getBooks');
        console.log('[Books Receiving]',getBooks);
        setSavedBooks(getBooks.data);
    }
    const container = {
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding:'20px'
    }
    const stylegetBook = {
        marginRight : "auto",
        marginLeft : "auto"
    }
    return (
      
            <div>
            {savedBooks.map( (book,index)=><div id={index}  style={container} ><SavedBooks {...book} /></div>)}
            </div>
        
    );
}

export default Favorites;