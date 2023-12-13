import React from 'react';

import TenantCard from './TenantCard';
import styles from './Tenants.module.scss';
import SectionHeading from '../../common/components/SectionHeading';

const Tenants = (): JSX.Element => {
  return (
    <div className={styles.tenantsWrapper}>
      <SectionHeading headingText="Tenants" />
      <div className={styles.tenantsContent}>
        {Array(60)
          .fill(1)
          .map((_v, index) => {
            return (
              <TenantCard
                key={index}
                tenant={{
                  name: 'Sai Kumar',
                  designation: 'Sr. Developer',
                  city: 'Rajahmundry',
                  mobile: 123,
                  email: 'sai@tw.com',
                  room: 12312,
                  joinedDate: '22-Aug-2023',
                  picture: 'https://picsum.photos/50/50'
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Tenants;
