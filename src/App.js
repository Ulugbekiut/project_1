import "./App.css";
import { useState, useRef, useCallback } from "react";
import useBookSearch from "./useBookSearch";

// import {useState, useEffect} from "react"

function App() {
  const [query, setQuery] = useState(" ");
  const [pageNumber, setPageNumber] = useState(1);
  const { books, loading, error, hasMore } = useBookSearch(query, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(node => {
    if(loading) return;
    console.log(node)
  });

  function handleChange(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <div className="App">
      <h1>Interesting</h1>
      <input type="text" value={query} onChange={handleChange} />
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        }else {
          return (
            <div key={book}>
              {book}
            </div>
          );
        }
      })}

      <div>{loading && "Loading..."}</div>
      <div>{error && "Error..."}</div>
      {hasMore && <button>Has More</button>}
    </div>
  );
}

export default App;
/* 


const getEndpoint = (pageId) => https://andrewmunn.github.io/newsfeed/page${pageId}.json

const {useState, useEffect} = React
function App() {
  const [pageId, setPageId] = useState(1)
  const [lastPage, setLastPage] = useState(false)
 
  const [list, setList] = useState([]);

  useEffect(()=>{
    fetch(getEndpoint(pageId))
      .then(res => res.json())
      .then(data => {
        console.log(data)
      setList([...list, ...data.stories])
      if(data.nextPageId===null){
        setLastPage(true)
      }
      })
      
  }, [pageId]);

  
    function handleClick(){
      setPageId(currentPageId => currentPageId + 1)
    }
  
  return (
    <div><NewsfeedList list = {list} /><button disabled ={lastPage } onClick={handleClick}>Next</button></div>
  )
}

function NewsfeedList({list}) {
  if (list.length === 0) {
    return null;
  }
  return (
    <div>{list.map(post=> (<List key={post.id} post={post} />))}</div>
  )
}
 function List({post}){
   return (

     <div>
      <h1>{post.author}</h1>
      <p>{post.body}</p>
      <img src ={post.image.url} width={post.image.width}   height ={post.image.height} />
     </div>
   )
 }

ReactDOM.render(<App />, document.getElementById("main"));
*/
