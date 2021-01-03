import { 
	Card as MUICard, 
	CardActionArea, 
	CardMedia, 
	Typography,
	Grid,
} from '@material-ui/core';

import EpisodeDetail from './EpisodeDetail';

import './styles.scss';

const Card = (props) => {
	const {Title, Episode, Season, Poster, Plot} = props.data;

	return (
	<Grid item lg={12}> 
		<MUICard className="card__main">
			<CardActionArea>
				<div className='card__heading'>
					<Typography variant='h5' color='textPrimary'>
						{Title}
					</Typography>
					<Typography variant='subtitle1' color='textSecondary'>
						{`Season: ${Season} Episode: ${Episode}`}
					</Typography>
				</div>
				<CardMedia component='img' className="card__image" image={Poster} />
			</CardActionArea>
			<EpisodeDetail details={Plot} />
		</MUICard>
	</Grid>
	)
};

export default Card;