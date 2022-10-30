import React from 'react';

import styles from './Nav.scss';

export interface NavProps {
  prop?: string;
}

export function Nav({prop = 'default value'}: NavProps) {
  return <div className={styles.Nav}>Nav {prop}</div>;
}
