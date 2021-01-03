import { 
	IconButton,
} from '@material-ui/core';

import { 
	Menu as MenuIcon,
	Search as SearchIcon,
} from '@material-ui/icons';

/**
 * Abstraction Layer for Material UI's Icon Button components
 */

export const HamburgerButton = () => (
	<IconButton edge="start" color="inherit" aria-label="menu"> 
		<MenuIcon />
	</IconButton>
);

export const SearchButton = () => (
	<IconButton aria-label="search" color="inherit">
		<SearchIcon />
	</IconButton>
);