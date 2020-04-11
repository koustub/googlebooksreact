import React from 'react';
import axios from 'axios';
function BookInfo(props){
    
        async function save(e){
        let s = e.target.id;
        console.log(`[id of the button]`,s);
        let title = document.getElementById(`title${s}`);
        let image = document.getElementById(`image${s}`);
        let desc = document.getElementById(`desc${s}`);
       
      try {
        let obj = {
            title:title.innerHTML,
            imageLink:image.getAttribute('src'),
            authors:[''],
            description:desc.innerHTML,
            index:props.ids.i
        }
        console.log(`[obj needs to be saved]`,obj)
        const apiResult = await fetch('/api/saveBooks', 
        {   method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
      }).then( result=>console.log(result));
     }
     catch(err){
         console.log(`[Error given]`,err)
     }
        }
    console.log(`[object for id]`,JSON.stringify(props.ids));
    const savebtn ={
        float:'right',
        marginRight:'2px',
        borderRadius:'5px'
    }
    let image;
    if(props.book.hasOwnProperty('imageLinks')){
         image = props.book.imageLinks.thumbnail;
    }
    else{
         image = 'https://imgplaceholder.com/128x192?text=No+Image'
    }
    
    return( <div class='row'>
                <div class='col-12 col-sm-12 col-md-12 col-lg-5'>
                    <h2 id={props.ids.title}>{props.book.title}</h2>
                    <img id={props.ids.image} src={image} alt='' />
                </div>
                <div class='col-12 col-sm-12 col-md-12 col-lg-7'>
                    <p id={props.ids.desc}>Description: {props.book.description}</p> 
                    <button class='btn btn-secondary' id={props.ids.i} onClick={save} style={savebtn}>save</button>
                    <button class='btn btn-secondary'  style={savebtn}>view</button>
                </div>
            </div>
    );
}

export default BookInfo;