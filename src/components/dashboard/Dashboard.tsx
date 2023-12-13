import React from 'react';

import styles from './Dashboard.module.scss';
import SectionHeading from '../../common/components/SectionHeading';
import RoomCard from '../Room/RoomCard';
import TenantCard from '../Tenant/TenantCard';

const Dashboard = (): JSX.Element => {
  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.roomsSection}>
      <SectionHeading headingText="Rooms" showViewAll={true} viewAllLink={'rooms'} />
      <div className={styles.roomsWrapper}>
        {Array(3)
          .fill(1)
          .map((_v, index) => {
            return (
              <RoomCard
                key={index}
                room={{ id: 1, pic: 'https://picsum.photos/400/300', rent: 123, type: '', sharing: 2, desc: '' }}
              />
            );
          })}
      </div>
      </div>

      <div className={styles.tenantsSection}>
      <SectionHeading
        headingText="Tenants"
        showViewAll={true}
        viewAllLink={'tenants'}
      />
      <div className={styles.tenantsWrapper}>
        {Array(3)
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
    </div>
  );
};

export default Dashboard;
