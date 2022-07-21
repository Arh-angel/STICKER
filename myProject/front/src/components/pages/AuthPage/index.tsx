import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import ButtonAuthReg from '../../common/Button/ButtonAuthReg';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/Input/PasswordInput';
import PasswordRecoveryLink from '../../common/LInks/PasswordRecoveryLink';

import style from './AuthPage.module.scss';

type AuthPageType = {
  handler: () => void | null | Promise<void>,
  trackEmail: (value:string) => void | null,
  trackPassword: (value:string) => void | null,
  erMessage: string,
  handlerErMessageInInput: (value:string) => void
}

const AuthPage = (props: AuthPageType) => {
  const { handler, trackEmail, trackPassword, erMessage, handlerErMessageInInput } = props;

  const [erMas, setErMas] = useState('');

  useEffect(() => {
    setErMas(erMessage);
  }, [erMessage]);

  return (
    <Form title="Hello, world!" supTitle="Пройдите авторизацию">
      <ButtonAuthReg />
      <Input id="email" placeholder="Email" type="text" trackEmail={trackEmail} handlerErMessage={handlerErMessageInInput} trackName={() => null} trackLastName={() => null} />
      <PasswordInput id="password" placeholder="Пароль" type="password" trackPassword={trackPassword} trackRepeatPassword={() => null} pasMatch={null} handlerErMessage={handlerErMessageInInput} />
      <PasswordRecoveryLink title="Забыли пароль?" />
      {erMas ? <span className={style.erMas}>{erMas}</span> : ''}
      <Button clName={null} title="Войти" handler={handler} width="100%" height="48px" background={null} textColor={null} fontSize={null} fontWeight={null} margin="24px 0 0 0" borderRadius={null} icon={null} />
    </Form>
  );
};

export default AuthPage;
