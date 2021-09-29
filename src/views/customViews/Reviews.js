import React from 'react'
import { useRecordContext } from 'react-admin'
import { Typography, makeStyles } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
		marginBottom: theme.spacing(2)
	}
}))

const ReviewsField = ({ source }) => {
	const classes = useStyles()
	const record = useRecordContext()

	return record ? (
		<div>
			{
				record[source].map(review => (
					<div className={classes.root}>
						<Rating value={review.rating} readOnly />
						<Typography variant="body1">
							{review.text}
						</Typography>
					</div>
				))
			}
		</div>
	) : null
}

export default ReviewsField