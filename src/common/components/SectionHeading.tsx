import React from 'react';
import styles from './SectionHeading.module.scss';
import { Link } from 'react-router-dom';
import Icon from './Icon';

interface SectionHeadingProps {
  headingText: string
  showViewAll?: boolean
  viewAllLink?: string
}

const SectionHeading = ({ headingText, viewAllLink, showViewAll }: SectionHeadingProps): JSX.Element => {
  return (
    <div className={styles.sectionHeadingWrapper}>
        <div className={styles.heading}>
          {headingText}
          <Icon id="icon-hashtag" height={20} width={20}/>
        </div>
        {showViewAll ? <div className={styles.viewAll}><Link className={styles.link} to={`/${viewAllLink}`}>View All</Link></div> : null }
    </div>
  );
};

export default SectionHeading;
