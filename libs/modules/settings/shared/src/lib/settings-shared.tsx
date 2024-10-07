import { infrastructureCommon } from '@zoran995/infrastructure-common';
import { CoreUi } from '@zoran995/core-ui';
import { sdk } from '@zoran995/sdk';

import styles from './settings-shared.module.scss';

export function SettingsShared() {
  infrastructureCommon();
  sdk();

  return (
    <div className={styles['container']}>
      <h1>Welcome to SettingsShared!</h1>
      <CoreUi />
    </div>
  );
}

export default SettingsShared;
