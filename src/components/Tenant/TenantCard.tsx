import React from 'react';
import styles from './TenantCard.module.scss';
import Icon from '../../common/components/Icon';

interface TenantProps {
  tenant: {
    picture: string
    name: string
    designation: string
    city: string
    mobile: number
    email: string
    room: number
    joinedDate: string
  }
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
        <div>{tenant.mobile}</div>
        <div>{tenant.email}</div>
      </div>
      <div className={styles.details}>
        <div className="">{tenant.room}</div>
        <div className="">{tenant.joinedDate}</div>
      </div>
      <div className={styles.actions}>
        <div title="Edit"><Icon id="icon-edit" height={24} width={24}/></div>
        <div title="Delete"><Icon id="icon-delete" height={24} width={24}/></div>
      </div>
    </div>
  );
};

export default TenantCard;
