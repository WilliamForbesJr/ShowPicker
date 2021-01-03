import { 
	Fab as MUIButton,
	Zoom, 
} from '@material-ui/core';

import { PlayArrow as PlayArrowIcon } from '@material-ui/icons';

import '../styles.scss';

const FabButton = (props) => (
	<Zoom in={true}>
		<MUIButton className='button__fab' variant='extended' color='secondary' onClick={props.onClick} >
			<PlayArrowIcon /> Find Random Episode
		</MUIButton>
	</Zoom>
);

export default FabButton;