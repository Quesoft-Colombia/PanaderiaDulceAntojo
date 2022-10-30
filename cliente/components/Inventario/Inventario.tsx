import React from 'react';

//import styles from './Inventario.scss';

export interface InventarioProps {
  prop?: string;
}

export function Inventario({prop = 'default value'}: InventarioProps) {
  return <div className={styles.Inventario}>Inventario {prop}</div>;
}
