/* eslint-disable react/jsx-indent */
import React from 'react';
import Button from '../../common/Button';

import imgOne from '../../../assets/images/productTestImg1.jpg';
import imgTwo from '../../../assets/images/productTestImg2.jpg';
import imgThree from '../../../assets/images/productTestImg3.jpg';
import imgFour from '../../../assets/images/productTestImg4.jpg';
import imgFive from '../../../assets/images/productTestImg5.jpg';
import style from './ProductPage.module.scss';
import Map from '../../common/Map';
import ProductItem from '../../common/ProductList/ProductItem';
import ProductItemAside from '../../common/ProductList/ProductItem/ProductItemAside';

type ProductPagePropsType = {
  handlerBtnBack: () => void
}

const ProductPage = (props: ProductPagePropsType) => {
  const { handlerBtnBack } = props;

  return (
    <div className={style.container}>
      <Button
        title={null}
        handler={handlerBtnBack}
        width={null}
        height={null}
        background="transparent"
        textColor={null}
        fontSize={null}
        fontWeight={null}
        margin={null}
        borderRadius={null}
        icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 10.5H5.745L14.13 2.115L12 0L0 12L12 24L14.115 21.885L5.745 13.5H24V10.5Z" fill="#2C2D2E" />
              </svg>} />
      <div className={style.wrapperBlock}>
        <div className={style.productBlock}>
          <div className={style.productBlockDateTitle}>
            <p className={style.productBlockDate}>14 апреля 2022</p>
            <h1 className={style.productBlockTitle}>Стиральная машина Bosch</h1>
            <p className={style.productBlockSerialNumber}>WS-25645-253-55</p>
            <div className={style.productBlockViews}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="rgba(42, 47, 55, 0.20)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="rgba(42, 47, 55, 0.20)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>356</span>
            </div>
          </div>
          <div className={style.productBlockFoto}>
            <img className={style.activFoto} src={imgOne} alt="img product" />
            <img className={style.fotoOne} src={imgTwo} alt="img product" />
            <img className={style.fotoTwo} src={imgThree} alt="img product" />
            <img className={style.fotoThree} src={imgFour} alt="img product" />
            <img className={style.fotoFour} src={imgFive} alt="img product" />
          </div>
          <div className={style.productBlockDescription}>
            <p>Описание:</p>
            <p className={style.productBlockDescriptionText}>Стиральная машина в отличном состянии, чистая, без накипи. С машиной отдам новый шланг для подключения воды и упаковку средства против накипи.</p>
          </div>
          <div className={style.productBlockMap}>
            <p>
              <span>Местоположение</span>
              : г. Кстово
            </p>
            <Map />
          </div>
        </div>
        <div className={style.similarProductPriceBtn}>
          <div className={style.priceNumber}>
            <p className={style.price}>22500 P</p>
            <Button title="Показать номер" handler={() => null} width="135px" height="40px" background="#3A95FF" textColor="#FFFFFF" fontSize="14px" fontWeight="500" margin={null} borderRadius="4px" icon={null} />
          </div>
          <div className={style.similarProductBlock}>
            <p className={style.similarProductText}>
              Смотрите также:
            </p>
            <ul className={style.similarProductList}>
              <ProductItemAside />
              <ProductItemAside />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
