import { CoreUi } from '@zoran995/core-ui';
import { SettingsShared } from '@zoran995/settings-shared';
import { infrastructureCommon } from '@zoran995/infrastructure-common';
import { sdk } from '@zoran995/sdk';

import styles from './settings-users.module.scss';

export function SettingsUsers() {
  infrastructureCommon();
  sdk();
  return (
    <div className={styles['container']}>
      <h1>Welcome to SettingsUsers!</h1>
      <SettingsShared />
      <CoreUi />
    </div>
  );
}

export default SettingsUsers;
