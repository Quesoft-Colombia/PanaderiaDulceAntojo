import React from 'react';

import styles from './Atojos.scss';

export interface AtojosProps {
  prop?: string;
}

export function Atojos({prop = 'default value'}: AtojosProps) {
  return <div className={styles.Atojos}>Atojos {prop}</div>;
}
