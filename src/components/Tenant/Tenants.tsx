import React, { useEffect } from 'react';

// Redux
import { useAppDispatch, useAppSelector } from '../../slices/hooks';
import { fetchTenants } from '../../slices/tenantSlice';

// Components
import TenantCard from './TenantCard';
import SectionHeading from '../../common/components/SectionHeading';

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
        : <>Loading...</>
      }
    </div>
  );
};

export default Tenants;
