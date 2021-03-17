import React, { useState } from 'react';

const Searchbar = ({onSearchMovie}) => {
    const [term, setTerm] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        onSearchMovie(term);
        setTerm('');
    }

    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" value={term} onChange={e => setTerm(e.target.value)}/>
            <button>Search Movies</button>
        </form>
    );
}

export default Searchbar;