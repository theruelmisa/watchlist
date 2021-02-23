import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { 
    SearchForm,
    InputField,
    SearchButton
} from './Searchbar.elements';

const SearchBar = ({ onSearchMovie }) => {
    const [ term, setTerm ] = useState('');

    const submitHandler = e => {
        e.preventDefault();

        onSearchMovie(term);
        setTerm('');
    }

    return (
        <>
            <SearchForm onSubmit={ submitHandler }>
                <SearchButton type="submit" disabled={term === '' ? true : false}>
                    <IoSearch />
                </SearchButton>
                <InputField 
                    type='text' 
                    value={ term } 
                    onChange={ e => setTerm( e.target.value ) } 
                    placeholder="Search Movies" 
                />
                
            </SearchForm>
        </>
    )
};

export default SearchBar;