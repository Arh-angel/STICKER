import React from 'react';
import Button from '../../common/Button';
import ButtonAuthReg from '../../common/Button/ButtonAuthReg';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/Input/PasswordInput';
import PasswordRecoveryLink from '../../common/LInks/PasswordRecoveryLink';

type AuthPageType = {
  handler: () => void | null,
  writeEmail: (value:string) => void | null,
  writePassword: (value:string) => void | null,
}

const AuthPage = (props: AuthPageType) => {
  const { handler, writeEmail, writePassword } = props;

  return (
    <Form title="Hello, world!" supTitle="Пройдите авторизацию">
      <ButtonAuthReg />
      <Input id="email" placeholder="Email" type="text" writeEmail={writeEmail} />
      <PasswordInput id="password" placeholder="Пароль" type="password" trackPas={() => null} trackRepeatPas={() => null} pasMatch={null} writePassword={writePassword} />
      <PasswordRecoveryLink title="Забыли пароль?" />
      <Button title="Войти" handler={handler} width="100%" height="48px" background={null} textColor={null} fontSize={null} fontWeight={null} margin="24px 0 0 0" borderRadius={null} icon={null} />
    </Form>
  );
};

export default AuthPage;
