import React, { useEffect } from 'react';

// Redux
import { useAppDispatch, useAppSelector } from '../../slices/hooks';
import { fetchTenants } from '../../slices/tenantSlice';

// Components
import TenantCard from './TenantCard';
import SectionHeading from '../../common/components/SectionHeading';
import Shimmer from '../../common/components/Shimmer';

// Assets
import styles from './Tenants.module.scss';

const Tenants = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const tenants = useAppSelector((state) => state.tenants.tenants);
  const loading = useAppSelector((state) => state.tenants.loading);

  useEffect(() => {
    void dispatch(fetchTenants());
  }, []);

  return (
    <div className={styles.tenantsWrapper}>
      <SectionHeading headingText="Tenants" />
      {!loading
        ? <div className={styles.tenantsContent}>
          {tenants
            .map((tenant) => {
              return (
                <TenantCard
                  key={tenant.id}
                  tenant={tenant}
                />
              );
            })}
        </div>
        : <div className={styles.tenantsContent}>
            <Shimmer height={100} width={'100%'} />
            <Shimmer height={100} width={'100%'} />
            <Shimmer height={100} width={'100%'} />
        </div>
      }
    </div>
  );
};

export default Tenants;
