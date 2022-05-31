import React, { ChangeEvent, SVGProps } from 'react';
import style from './SearchInput.module.scss';

type InputPropsType = {
  id: string;
  placeholder: SVGProps<SVGElement> | string;
  type: 'text';
};

const SearchInput = ({
  id, placeholder, type
}: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => '1';
  return (
    <label className={style.wrapper} htmlFor={id}>
      <input id={id} onChange={handler} type={type} />
      <span>{placeholder}</span>
    </label>
  );
};

export default SearchInput;
