import { 
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@material-ui/core';

import { ExpandMore } from '@material-ui/icons';

const EpisodeDetail = (props) => (
	<Accordion>
		<AccordionSummary expandIcon={<ExpandMore />}> 
			Episode Details 
		</AccordionSummary>
		<AccordionDetails >
			{props.details} 
		</AccordionDetails>
	</Accordion>
);

export default EpisodeDetail;