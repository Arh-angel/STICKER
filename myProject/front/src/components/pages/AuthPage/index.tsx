import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import ButtonAuthReg from '../../common/Button/ButtonAuthReg';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/Input/PasswordInput';
import PasswordRecoveryLink from '../../common/LInks/PasswordRecoveryLink';

import style from './AuthPage.module.scss';

type AuthPageType = {
  handler: () => void | null,
  writeEmail: (value:string) => void | null,
  writePassword: (value:string) => void | null,
  erMessage: string
}

const AuthPage = (props: AuthPageType) => {
  const { handler, writeEmail, writePassword, erMessage } = props;

  const [erMas, setErMas] = useState('');

  useEffect(() => {
    setErMas(erMessage);
  }, [erMessage]);

  const handlerErMessage = (value:string) => {
    setErMas(value);
  };

  return (
    <Form title="Hello, world!" supTitle="Пройдите авторизацию">
      <ButtonAuthReg />
      <Input id="email" placeholder="Email" type="text" writeEmail={writeEmail} handlerErMessage={handlerErMessage} />
      <PasswordInput id="password" placeholder="Пароль" type="password" trackPas={() => null} trackRepeatPas={() => null} pasMatch={null} writePassword={writePassword} handlerErMessage={handlerErMessage} />
      <PasswordRecoveryLink title="Забыли пароль?" />
      {erMas ? <span className={style.erMas}>{erMas}</span> : ''}
      <Button title="Войти" handler={handler} width="100%" height="48px" background={null} textColor={null} fontSize={null} fontWeight={null} margin="24px 0 0 0" borderRadius={null} icon={null} />
    </Form>
  );
};

export default AuthPage;
