import React from 'react'
import { Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
	return (
		<div>
			<Typography variant="h5">
				Snake Way Admin App
			</Typography>
			<a href="https://github.com/snake-eaterr?tab=repositories" target="_blank" rel="noreferrer">
				<Typography varinat="h6">
					<FontAwesomeIcon icon={faGithub} /> snake-eaterr
				</Typography>
			</a>
		</div>
	)
}

export default Home