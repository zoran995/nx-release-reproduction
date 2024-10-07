// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { sdk } from '@zoran995/sdk';
import { SettingsMain } from '@zoran995/settings';
import { CoreUi } from '@zoran995/core-ui';
import { infrastructureCommon } from '@zoran995/infrastructure-common';

import NxWelcome from './nx-welcome';

export function App() {
  sdk();

  infrastructureCommon();

  return (
    <div>
      <NxWelcome title="nx-release-reproduction" />
      <CoreUi />
      <SettingsMain />
    </div>
  );
}

export default App;
