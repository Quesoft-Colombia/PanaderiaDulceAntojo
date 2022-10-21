import React from 'react';

import styles from './login.scss';

export interface loginProps {
  prop?: string;
}

export function login({prop = 'default value'}: loginProps) {
  return <div className={styles.login}>login {prop}</div>;
}
