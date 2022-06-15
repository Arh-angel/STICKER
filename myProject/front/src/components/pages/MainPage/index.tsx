import React from 'react';
import { IAd } from '../../../models/IAd';

import Banner from '../../common/Baner';
import MainMenu from '../../common/MainMenu';
import ProductList from '../../common/ProductList';

type MainPagePropsType = {
  ads: IAd[],
}

const MainPage = (props: MainPagePropsType) => {
  const { ads } = props;

  return (
    <>
      <Banner />
      <MainMenu />
      <ProductList ads={ads} />
    </>
  );
};

export default MainPage;
