import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Main from './main';
import Post from './post';

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/post/:userId/:id'} element={<Post/>}/>
      </Routes>
    </>
  );
}

export default React.memo(App);
