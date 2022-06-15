import React, { ChangeEvent, SVGProps } from 'react';
import style from './SearchInput.module.scss';

type InputPropsType = {
  id: string;
  placeholder: SVGProps<SVGElement> | string;
  type: 'text';
  handlerSearchValue: (value:string) => void;
};

const SearchInput = ({
  id, placeholder, type, handlerSearchValue
}: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => handlerSearchValue(event.target.value);

  return (
    <label className={style.wrapper} htmlFor={id}>
      <input id={id} onChange={handler} type={type} />
      <span>{placeholder}</span>
    </label>
  );
};

export default SearchInput;
