/* eslint-disable no-shadow */
import React from 'react';
import Button from '../../common/Button';
import ButtonAuthReg from '../../common/Button/ButtonAuthReg';
import Form from '../../common/Form';
import Checkbox from '../../common/Form/Input/Checkbox';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/Input/PasswordInput';

type RegistrationPageType = {
  handler: () => void | null;
  trackPas: (value: string) => void;
  trackRepeatPas: (value: string) => void;
  pasMatch: boolean
}

const RegistrationPage = (props: RegistrationPageType) => {
  const { handler, trackPas, trackRepeatPas, pasMatch } = props;

  return (
    <Form title="Hello, world!" supTitle="Создайте аккаунт">
      <ButtonAuthReg />
      <Input id="name" placeholder="Имя" type="text" writeEmail={() => null} />
      <Input id="lastName" placeholder="Фамилия" type="text" writeEmail={() => null} />
      <Input id="email" placeholder="Email" type="text" writeEmail={() => null} />
      <PasswordInput id="password" placeholder="Пароль" type="password" trackPas={trackPas} trackRepeatPas={trackRepeatPas} pasMatch={pasMatch} writePassword={() => null} />
      <PasswordInput id="repeatPassword" placeholder="Повторите пароль" type="password" trackPas={trackPas} trackRepeatPas={trackRepeatPas} pasMatch={pasMatch} writePassword={() => null} />
      <Checkbox text="Принимаю условия" textLink="Пользовательского соглашения" checked />
      <Button title="Создать аккаунт" handler={handler} width="100%" height="48px" background={null} textColor={null} fontSize={null} fontWeight={null} margin="24px 0 0 0" borderRadius={null} icon={null} />
    </Form>
  );
};

export default RegistrationPage;
