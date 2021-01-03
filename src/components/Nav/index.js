import { 
	AppBar,
	Toolbar,
	Slide,
	useScrollTrigger,
	Typography
} from '@material-ui/core';

import {
	HamburgerButton,
	SearchButton,
} from '../Buttons/Icon';

import './styles.scss';

/**
 * Animation to slide menu away on scroll
 * @param {*} props 
 */
const HideOnScroll = (props) => {
  const trigger = useScrollTrigger({
		threshold: 10
	});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
};

const Nav = (props) => (
	<HideOnScroll {...props}>
		<AppBar className='nav'>
			<Toolbar>
				<HamburgerButton />
				<Typography className='nav__title' variant="h6" color="inherit">
					The Office
				</Typography>
				<SearchButton />
			</Toolbar>
		</AppBar>
	</HideOnScroll>
);

export default Nav;