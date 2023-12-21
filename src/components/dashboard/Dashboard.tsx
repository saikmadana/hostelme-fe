import React, { useEffect } from 'react';

// Redux
import { useAppDispatch, useAppSelector } from '../../slices/hooks';
import { fetchDashboard } from '../../slices/dashboardSlice';

// Components
import RoomCard from '../Room/RoomCard';
import TenantCard from '../Tenant/TenantCard';
import SectionHeading from '../../common/components/SectionHeading';
import Shimmer from '../../common/components/Shimmer';

// Assets
import styles from './Dashboard.module.scss';

const Dashboard = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchDashboard());
  }, []);

  const {rooms, tenants, loading} = useAppSelector((state) => state.dashboard);

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.roomsSection}>
        <SectionHeading headingText="Rooms" showViewAll={true} viewAllLink={'rooms'} />
        {!loading ? (
          <div className={styles.roomsWrapper}>
            {rooms.map((room, index) => {
              return <RoomCard key={index} room={room} />;
            })}
          </div>
        ) : (
          <div className={styles.roomsWrapper}>
            <Shimmer height={450} width={400}/>
            <Shimmer height={450} width={400}/>
            <Shimmer height={450} width={400}/>
          </div>
        )}
      </div>

      <div className={styles.tenantsSection}>
        <SectionHeading headingText="Tenants" showViewAll={true} viewAllLink={'tenants'} />
        {!loading ? <div className={styles.tenantsWrapper}>
          {tenants.map((tenant, index) => {
            return <TenantCard key={index} tenant={tenant} />;
          })}
        </div> : <div className={styles.tenantsWrapper}>
            <Shimmer height={100} width={'100%'} />
            <Shimmer height={100} width={'100%'} />
            <Shimmer height={100} width={'100%'} />
        </div>}
      </div>
    </div>
  );
};

export default Dashboard;
