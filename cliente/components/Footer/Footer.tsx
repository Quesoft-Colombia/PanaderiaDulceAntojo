import React from 'react';

import styles from './Footer.scss';

export interface FooterProps {
  prop?: string;
}

export function Footer({prop = 'default value'}: FooterProps) {
  return <div className={styles.Footer}>Footer {prop}</div>;
}
