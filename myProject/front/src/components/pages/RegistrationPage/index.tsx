/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import ButtonAuthReg from '../../common/Button/ButtonAuthReg';
import Form from '../../common/Form';
import Checkbox from '../../common/Form/Input/Checkbox';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/Input/PasswordInput';

import style from './RegistrationPage.module.scss';

type RegistrationPageType = {
  handler: () => Promise<void> | void | null;
  trackPas: (value: string) => void;
  trackRepeatPas: (value: string) => void;
  pasMatch: boolean,
  erMessage: string
}

const RegistrationPage = (props: RegistrationPageType) => {
  const { handler, trackPas, trackRepeatPas, pasMatch, erMessage } = props;

  const [erMas, setErMas] = useState('');

  useEffect(() => {
    setErMas(erMessage);
  }, [erMessage]);

  const handlerErMessage = (value:string) => {
    setErMas(value);
  };

  return (
    <Form title="Hello, world!" supTitle="Создайте аккаунт">
      <ButtonAuthReg />
      <Input id="name" placeholder="Имя" type="text" writeEmail={() => null} handlerErMessage={handlerErMessage} />
      <Input id="lastName" placeholder="Фамилия" type="text" writeEmail={() => null} handlerErMessage={handlerErMessage} />
      <Input id="email" placeholder="Email" type="text" writeEmail={() => null} handlerErMessage={handlerErMessage} />
      <PasswordInput id="password" placeholder="Пароль" type="password" trackPas={trackPas} trackRepeatPas={trackRepeatPas} pasMatch={pasMatch} writePassword={() => null} handlerErMessage={handlerErMessage} />
      <PasswordInput id="repeatPassword" placeholder="Повторите пароль" type="password" trackPas={trackPas} trackRepeatPas={trackRepeatPas} pasMatch={pasMatch} writePassword={() => null} handlerErMessage={handlerErMessage} />
      <Checkbox text="Принимаю условия" textLink="Пользовательского соглашения" checked handlerErMessage={handlerErMessage} />
      {erMas ? <span className={style.erMas}>{erMas}</span> : ''}
      <Button title="Создать аккаунт" handler={handler} width="100%" height="48px" background={null} textColor={null} fontSize={null} fontWeight={null} margin="24px 0 0 0" borderRadius={null} icon={null} />
    </Form>
  );
};

export default RegistrationPage;
