import React from 'react';
import { 
	ThemeProvider, 
	useMediaQuery, 
	createMuiTheme, 
	CssBaseline, 
} from '@material-ui/core';

import { StylesProvider } from '@material-ui/core/styles';

/**
 * Handles Top-Level Providers for Materials Theme and Style APIs.
 * Set's CSS baseline using Material's CSSBaseline Component
 */
const Provider = (props) => {
	const useDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	// Set theme base on user dark mode preferences
	const theme = React.useMemo(() =>
		createMuiTheme({
			palette: {
				type: useDarkMode ? 'dark' : 'light',
			},
		}),
		[useDarkMode],
	);

  return (
		<StylesProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
					{props.children}
			</ThemeProvider>
		</StylesProvider>
  );
};

export default Provider;
