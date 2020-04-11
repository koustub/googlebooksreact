import React,{useState} from 'react';

import BookInfo from './BookInfo';
let booksArr =[]; 
function Search() {
    const [searchInput,setSearchInput] = useState('');
    const [searchBookResult,setSearchBookResult] = useState([]);

    function handleInputChange(e){
        const input = e.target.value;
        console.log(`[input Received]`,input);
        setSearchInput(input);

    }
    const container = {
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding:'20px'
    }
    async function searchBooks(){  
            const apiBooks = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}+intitle`).then( result=>result.json() );
            console.log(`[Object Received From Google Apis]`,apiBooks);
            const items = apiBooks.items;
            for(let i=1;i<items.length-2;i++){
                let obj = {
                    title:`title${i}`,
                    image:`image${i}`,
                    desc:`desc${i}`,
                    i:`${i}`
                }
                let bookObj = items[i].volumeInfo;
                let ObjForAll = {
                    ids: obj,
                    book : bookObj
                }
                booksArr.push(ObjForAll);
            };
            setSearchBookResult(booksArr);
            booksArr =[];
    }

    
    return (
        <div class='container'>
            <div class="input-group mt-5 mb-3" >
                <input type="text" class="form-control" value={searchInput} placeholder="Books tile" aria-label="book tile" onChange={handleInputChange} />
                    <div class="input-group-append">
                        <button class='btn btn-secondary' id="btnSearch" onClick={searchBooks}>Search</button>
                    </div>
            </div>
            {searchBookResult.map( (book,index)=><div id={index}  style={container} ><BookInfo {...book} /></div>)}
        </div>
        );
        }
        
export default Search;