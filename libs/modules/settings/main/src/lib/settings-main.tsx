import { SettingsUsers } from '@zoran995/settings-users';
import styles from './settings-main.module.scss';

export function SettingsMain() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SettingsMain!</h1>
      <SettingsUsers />
    </div>
  );
}

export default SettingsMain;
