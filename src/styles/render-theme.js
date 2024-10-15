import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const renderTheme = (children) => {
  // eslint-disable-next-line no-undef
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
