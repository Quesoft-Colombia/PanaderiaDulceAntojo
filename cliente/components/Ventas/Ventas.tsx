import React from 'react';

import styles from './Ventas.scss';

export interface VentasProps {
  prop?: string;
}

export function Ventas({prop = 'default value'}: VentasProps) {
  return <div className={styles.Ventas}>Ventas {prop}</div>;
}
