import React, { useEffect } from 'react';

// Redux
import { useAppDispatch, useAppSelector } from '../../slices/hooks';
import { fetchDashboard } from '../../slices/dashboardSlice';

// Components
import RoomCard from '../Room/RoomCard';
import TenantCard from '../Tenant/TenantCard';
import SectionHeading from '../../common/components/SectionHeading';

// Assets
import styles from './Dashboard.module.scss';

const Dashboard = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchDashboard());
  }, []);

  const {rooms, tenants} = useAppSelector((state) => state.dashboard);

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.roomsSection}>
      <SectionHeading headingText="Rooms" showViewAll={true} viewAllLink={'rooms'} />
      <div className={styles.roomsWrapper}>
        {rooms.map((room, index) => {
            return (
              <RoomCard
                key={index}
                room={room}
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
        {tenants
          .map((tenant, index) => {
            return (
              <TenantCard
                key={index}
                tenant={tenant}
              />
            );
          })}
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
