import { render } from '@testing-library/react';

import SettingsShared from './settings-shared';

describe('SettingsShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SettingsShared />);
    expect(baseElement).toBeTruthy();
  });
});
