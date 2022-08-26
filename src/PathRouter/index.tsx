import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from '../templates/Login/Login';

const PathRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default PathRouter;
