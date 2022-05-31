import React from 'react';
import { Link } from 'react-router-dom';

import style from './PasswordRecoveryLink.module.scss';

type PasswordRecoveryLinkType = {
  title: string
}

const PasswordRecoveryLink = (props: PasswordRecoveryLinkType) => {
  const { title } = props;
  return (
    <div className={style.wrapper}>
      <Link to="/recovery">{title}</Link>
    </div>
  );
};

export default PasswordRecoveryLink;
