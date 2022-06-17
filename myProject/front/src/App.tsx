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
import { useAppDispatch, useAppSelector } from './hooks/storeHooks';
import { checkAuth, selectUserId } from './store/slice/authSlice/authSlice';

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
        <Route index element={<MainContainer />} />
        <Route path="/:category" element={<MainContainer />} />
        <Route path="ads" element={<AuthHOC><AdsContainer /></AuthHOC>} />
        <Route path="/ads/:id" element={<AuthHOC><ProductContainer /></AuthHOC>} />
        <Route path="/ads/productEditing" element={<AuthHOC><ProductEditingContainer /></AuthHOC>} />
        <Route path="/ads/productEditing/:id" element={<AuthHOC><ProductEditingContainer /></AuthHOC>} />
        <Route path="searchResults" element={<AuthHOC><SearchResultsContainer /></AuthHOC>} />
        <Route path="/searchResults/:id" element={<AuthHOC><ProductContainer /></AuthHOC>} />
        <Route path="reg" element={<RegistrationContainer />} />
        <Route path="auth" element={<AuthContainer />} />
        <Route path="*" element={<ErContainer />} />
      </Route>
    </Routes>
  );
};

export default App;
