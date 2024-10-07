import { render } from '@testing-library/react';

import SettingsUsers from './settings-users';

describe('SettingsUsers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SettingsUsers />);
    expect(baseElement).toBeTruthy();
  });
});
