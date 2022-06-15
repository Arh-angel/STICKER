import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../../hooks/storeHooks';
import { addDescriptionAd } from '../../../../../store/slice/adsSlice/adsSlice';

import style from './Textarea.module.scss';

type TextareaPropsType = {
  placeholder: string
}

const Textarea = (props: TextareaPropsType) => {
  const { placeholder } = props;

  const [currentValue, setCurrentValue] = useState('');
  const [valid, setValid] = useState(true);
  const [textError, setTextError] = useState('');

  const dispatch = useAppDispatch();

  const handler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    if (currentValue.length > 0) {
      if (currentValue.length < 10 || currentValue.length > 3000) {
        setValid(false);
        setTextError('Некорректный лимит символов');
      } else {
        setValid(true);
      }
    } else {
      setValid(true);
    }
  }, [currentValue]);

  useEffect(() => {
    if (currentValue.length > 0) {
      dispatch(addDescriptionAd(currentValue));
    }
  }, [currentValue]);

  return (
    <div className={style.containerTextarea}>
      <p>Описание</p>
      <textarea onChange={handler} name="description" id="description" placeholder={placeholder} className={!valid ? style.notValid : ''} />
      {!valid ? <span className={style.textError}>{textError}</span> : ''}
    </div>
  );
};

export default Textarea;
