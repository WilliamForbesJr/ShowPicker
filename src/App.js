import React, { useState } from 'react';
import { 
	Container, 
	Grid 
} from '@material-ui/core';

import { getRandomEpisode } from './utility/api';

import Provider from './components/Provider';
import Card from './components/Card';
import Nav from './components/Nav';
import FabButton from './components/Buttons/Fab';

function App() {
	const [data, setData] = useState();

	const handleClick = async () => {
		const result = await getRandomEpisode();
		setData(result);
	};

  return (
		<Provider>
			<Nav />
			<Container component='main'>
				<Grid 
					container
					className="grid__container"
					direction='column'
					justify='center'					
				>
					{data && <Card data={data} /> }
				</Grid>
			</Container>
			<FabButton onClick={handleClick}/>
		</Provider>
  );
}

export default App;
