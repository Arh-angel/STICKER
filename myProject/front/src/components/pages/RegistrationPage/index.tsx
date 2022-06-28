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
  trackName: (value: string) => void;
  trackLastName: (value: string) => void;
  trackEmail: (value: string) => void;
  trackPassword: (value: string) => void;
  trackRepeatPassword: (value: string) => void;
  trackAgreement: (value: boolean) => void;
  pasMatch: boolean,
  erMessage: string
}

const RegistrationPage = (props: RegistrationPageType) => {
  const { handler, trackName, trackLastName, trackEmail, trackPassword, trackRepeatPassword, trackAgreement, pasMatch, erMessage } = props;

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
      <Input id="name" placeholder="Имя" type="text" handlerErMessage={handlerErMessage} trackName={trackName} trackLastName={trackLastName} trackEmail={trackEmail} />
      <Input id="lastName" placeholder="Фамилия" type="text" handlerErMessage={handlerErMessage} trackName={trackName} trackLastName={trackLastName} trackEmail={trackEmail} />
      <Input id="email" placeholder="Email" type="text" handlerErMessage={handlerErMessage} trackName={trackName} trackLastName={trackLastName} trackEmail={trackEmail} />
      <PasswordInput id="password" placeholder="Пароль" type="password" trackPassword={trackPassword} trackRepeatPassword={() => null} pasMatch={pasMatch} handlerErMessage={handlerErMessage} />
      <PasswordInput id="repeatPassword" placeholder="Повторите пароль" type="password" trackPassword={() => null} trackRepeatPassword={trackRepeatPassword} pasMatch={pasMatch} handlerErMessage={handlerErMessage} />
      <Checkbox text="Принимаю условия" textLink="Пользовательского соглашения" checked handlerErMessage={handlerErMessage} trackAgreement={trackAgreement} handlerFilterValue={() => null} />
      {erMas ? <span className={style.erMas}>{erMas}</span> : ''}
      <Button clName={null} title="Создать аккаунт" handler={handler} width="100%" height="48px" background={null} textColor={null} fontSize={null} fontWeight={null} margin="24px 0 0 0" borderRadius={null} icon={null} />
    </Form>
  );
};

export default RegistrationPage;
