import React from 'react';

import styles from './Shimmer.module.scss';

const Shimmer = ({height, width}) => {
  return <div style={{width: width, height: height}} className={styles.animate}></div>
}

export default Shimmer;