import React,{useState} from 'react'

const Search = ({getQuary}) => {

    const [text, setText] = useState("")


    const onChange=(q)=>{
        setText(q)
        getQuary(q)

    }

    return ( 
        <section className="search">
            <form >
                <input type="text" className="form-control" placeholder="Search Characters..."
                autoFocus
                onChange={(e)=>onChange(e.target.value)}
                value={text}/>
            </form>
        </section>
    )
}

export default Search
