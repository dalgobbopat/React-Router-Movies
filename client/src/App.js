import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';



const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path='/'>MovieList</Route>
      <Route path='/movies/:id'>Movies</Route>
      
    </div>
  );
};

export default App;
