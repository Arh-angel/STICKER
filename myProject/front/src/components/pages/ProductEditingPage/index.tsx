/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';

import { Radio } from 'antd';
import AdminMenu from '../../common/AsideMenu';
import Button from '../../common/Button';
import Input from '../../common/Form/Input';
import Select from '../../common/Form/Input/Select';
import UploadInput from '../../common/Form/Input/UploadInput';

import 'antd/dist/antd.css';
import style from './ProductEditingPage.module.scss';
import Form from '../../common/Form';
import InputInfo from '../../common/Form/Input/InputInfo';
import Map from '../../common/Map';
import Textarea from '../../common/Form/Input/Textarea';

type ProductEditingPageProps = {
  handlerBtnBack: () => void
};

const ProductEditingPage = (props: ProductEditingPageProps) => {
  const { handlerBtnBack } = props;

  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div className={style.container}>
      <AdminMenu />
      <Form title={null} supTitle={null}>
      <Button
        title="Вернуться назад"
        handler={handlerBtnBack}
        width="auto"
        height={null}
        background="transparent"
        textColor="#2A2F37"
        fontSize="14px"
        fontWeight="400"
        margin={null}
        borderRadius={null}
        icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 10.5H5.745L14.13 2.115L12 0L0 12L12 24L14.115 21.885L5.745 13.5H24V10.5Z" fill="#2C2D2E" />
              </svg>} />
        <div className={style.productEditingHeaderBlock}>
          <h3 className={style.productEditingHeaderBlockTitle}>Чепчик</h3>
          <Button title="Сохранить" handler={() => null} width="147px" height="40px" background="#3A95FF" textColor="#FFFFFF" fontSize="14px" fontWeight="500" margin={null} borderRadius={null} icon={null} />
        </div>
        <div className={style.productEditingBlock}>
          <InputInfo title="Название товара" id="nameProduct" placeholder="Чепчик" type="text" />
          <div className={style.productEditingBlockSelectPrice}>
            <Select title="Категория" />
            <div className={style.productEditingBlockPrice}>
              <InputInfo title="Стоимость" id="priceProduct" placeholder="15000" type="text" />
            </div>
          </div>
          <div className={style.productEditingBlockDatePhone}>
            {isAdmin ? <div className={style.productEditingBlockDate}>
              <InputInfo title="Дата публикации" id="datePublish" placeholder="12.04.2022" type="text" />
                       </div> : ''}
            <div className={style.productEditingBlockPhone}>
              <InputInfo title="Телефон" id="tel" placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _" type="text" />
            </div>
          </div>
          <Textarea placeholder="Введите текст (до 3000 символов)" />
          <div className={style.productEditingBlockAddFile}>
            <p>Фотография</p>
            <div className={style.productEditingBlockAddFileWrapper}>
              <UploadInput />
            </div>
          </div>
          <InputInfo title="Местоположение" id="location" placeholder="Введите адрес" type="text" />
          <Map />
          <div className={style.productEditingBlockPublication}>
            <p>Публикация</p>
            <div className={style.productEditingBlockPublicationBtn}>
              <Radio.Group name="radiogroup" defaultValue={1} className={style.productEditingBlockBtn}>
                <Radio value={1}>Показать</Radio>
                <Radio value={2}>Скрыть</Radio>
              </Radio.Group>
              <Button
                title="Сбросить выбор"
                handler={() => null}
                width="auto"
                height={null}
                background="transparent"
                textColor="#2A2F37"
                fontSize="16px"
                fontWeight="400"
                margin={null}
                borderRadius={null}
                icon={null} />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProductEditingPage;
