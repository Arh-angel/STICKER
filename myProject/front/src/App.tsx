import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthHOC from './components/hoc/AuthHOC';
import PageWrapper from './components/common/PageWrapper';

import RegistrationContainer from './containers/RegistrationContainer';
import AuthContainer from './containers/AuthContainer';

import MainContainer from './containers/MainContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import AdsContainer from './containers/AdsContainer';
import ProductEditingContainer from './containers/ProductEditingContainer';
import ErContainer from './containers/ErContainer';
import ProductContainer from './containers/ProductContainer';
import { useAppDispatch } from './hooks/storeHooks';
import { checkAuth } from './store/slice/authSlice/authSlice';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<AuthHOC><MainContainer /></AuthHOC>} />
        <Route path="/:id" element={<AuthHOC><ProductContainer /></AuthHOC>} />
        <Route path="ads" element={<AuthHOC><AdsContainer /></AuthHOC>} />
        <Route path="/ads/:id" element={<AuthHOC><ProductContainer /></AuthHOC>} />
        <Route path="productEditing" element={<AuthHOC><ProductEditingContainer /></AuthHOC>} />
        <Route path="searchResults" element={<AuthHOC><SearchResultsContainer /></AuthHOC>} />
        <Route path="reg" element={<RegistrationContainer />} />
        <Route path="auth" element={<AuthContainer />} />
        <Route path="*" element={<ErContainer />} />
      </Route>
    </Routes>
  );
};

export default App;
