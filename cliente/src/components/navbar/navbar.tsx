import React from 'react';

import styles from './navbar.scss';

export interface navbarProps {
  prop?: string;
}

export function navbar({prop = 'default value'}: navbarProps) {
  return <div className={styles.navbar}>navbar {prop}</div>;
}
