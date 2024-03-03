import React, { createContext } from 'react'

import { fetchDataFromApi } from '../utils/api'
import { useState } from 'react';
import { useEffect } from 'react';

export const Context= createContext();

export const AppContext = (props) => {
    const[loading, setLoading]= useState(false);
    const[searchResults, setSearchResults]= useState(false);
    const[selectCategories, setSelectCategories]= useState('New');
    const[mobileMenu ,setMobileMenu]= useState(false);

useEffect(()=>{
    fetchSelectedCategoryData(selectCategories)
}, [selectCategories]);


const fetchSelectedCategoryData = (query)=>{
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
        console.log(contents);
        setSearchResults(contents)
        setLoading(false);
    })
}

  return (
    <Context.Provider//all the props will be passed here
    value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        setSelectCategories,
        selectCategories,
        mobileMenu,
        setMobileMenu,
    }}>
{props.children}
    </Context.Provider>
  );
};

