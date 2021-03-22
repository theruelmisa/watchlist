import React, { useState } from 'react';
import { Form, InputGroup, TextField, SearchButton } from './Searchbar.elements';

const Searchbar = ({onSearchMovie}) => {
    const [term, setTerm] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        onSearchMovie(term);
        setTerm('');
    }

    return ( 
        <Form onSubmit={submitHandler}>
            <InputGroup>
                <TextField type="text" value={term} onChange={e => setTerm(e.target.value)}/>
                <SearchButton>Search Movies</SearchButton>
            </InputGroup>
        </Form>
    );
}

export default Searchbar;