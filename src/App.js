import React, {useState,useEffect} from "react"
import './App.css';
import Header from "./componenets/ui/Header"
import Search from "./componenets/ui/Search"
import CharacterGrid from "./componenets/characters/CharacterGrid"
import axios from "axios"


const App=()=> {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState("")


  useEffect(() => {
    const fetchItems =async ()=>{
      const result =await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems()
    
  }, [query])


  return (
<div className="container">
    <Header/>
    <Search getQuary={(q)=>setQuery(q)} />
    <CharacterGrid isLoading={isLoading} items={items} />

</div>
  );
}

export default App;
