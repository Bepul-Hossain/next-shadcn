import React from "react";

type InputProps = {
    query?: string;
    setQuery:React.Dispatch<React.SetStateAction<string>>
}

const Search =(props:InputProps)=>{
    const { query,setQuery } = props;

    const inputHandleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(event.target.value);
        console.log(query)
      }

    return(
        <input
        type='text'
        value={query}
        onChange = {inputHandleChange}
        placeholder = "Search..."
        />
    )
}

export default Search