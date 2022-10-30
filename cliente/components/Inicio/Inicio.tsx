import React from 'react';

import styles from './Inicio.scss';

export interface InicioProps {
  prop?: string;
}

export function Inicio({prop = 'default value'}: InicioProps) {
  return <div className={styles.Inicio}>Inicio {prop}</div>;
}
