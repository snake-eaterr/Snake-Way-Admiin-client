import React, { useMemo } from 'react'
import { useRecordContext } from 'react-admin'
import { Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

const RatingField = ({ source }) => {
	const record = useRecordContext()

	const averageRating = useMemo(() => {
		
		const sum = record[source].reduce((a, b) => {
			return a + b.rating
		}, 0)
		return sum / record[source].length

}, [source, record])

	return record ? (
		<div>
			{
				<Rating value={averageRating} readOnly />
			}
		</div> 
	) : null
}

export default RatingField