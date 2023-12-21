import React from 'react';

// Redux
import { Tenant } from '../../slices/tenantSlice';

// Components
import Icon from '../../common/components/Icon';

// Assets
import styles from './TenantCard.module.scss';

interface TenantProps {
  tenant: Tenant
}

const TenantCard = ({ tenant }: TenantProps): JSX.Element => {
  return (
    <div className={styles.TenantsWrapper}>
      <div className={styles.picture}>
        <img src={tenant.picture} alt="user_picture"></img>
      </div>
      <div className={styles.demograph}>
        {tenant.name}, {tenant.designation}
        <div>{tenant.city}</div>
      </div>
      <div className={styles.contact}>
        <div>{tenant.phone}</div>
        <div>{tenant.email}</div>
      </div>
      <div className={styles.details}>
        <div className="">{tenant.room}</div>
        <div className="">{tenant.joindate}</div>
      </div>
      <div className={styles.actions}>
        <div title="Edit"><Icon id="icon-edit" height={24} width={24}/></div>
        <div title="Delete"><Icon id="icon-delete" height={24} width={24}/></div>
      </div>
    </div>
  );
};

export default TenantCard;
