import React from 'react';
import Axios from 'axios';
function SavedBooks(props) {
    
    async function deleteBook(e){
        const idToGet = e.target.id;
        console.log(`[index received]`,idToGet);
        const title = document.getElementById(`title${idToGet}`);
        console.log(`[Name of the book received]`,title.innerHTML);
        let BookToBeRemoved = title.innerHTML;
        const getBooks = await Axios.delete(`/api/Books/${BookToBeRemoved}`);
        console.log(`[Response for the Removing book]`,getBooks);
    }
    return (
        <div class='container'>
            
            <div class='row'>
                <div class='col-12 col-sm-12 col-md-12 col-lg-5'>
                    <h1 id={`title${props.index}`}>{props.title}</h1>
                    <img src={props.imageLink} alt='' />
                </div>
                <div class='col-12 col-sm-12 col-md-12 col-lg-7'>
                    <p>Description: {props.description}</p>
                    <button class='btn btn-secondary' id={props.index} onClick={deleteBook} >Delete</button>
                   
                </div>
            </div>
        </div>
    );

}

export default SavedBooks;