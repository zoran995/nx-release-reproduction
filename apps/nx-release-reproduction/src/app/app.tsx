// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { sdk } from '@zoran995/sdk';

import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  sdk();

  return (
    <div>
      <NxWelcome title="nx-release-reproduction" />
    </div>
  );
}

export default App;
