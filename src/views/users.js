import React from 'react'
import { List, TextField, Show, SimpleShowLayout, Datagrid, ShowButton } from 'react-admin'


export const UserList = props => {
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<TextField source="username" />
				<TextField source="id" />
				<ShowButton />
			</Datagrid>
		</List>
	)
}

export const UserShow = props => {
	return (
		<Show {...props}>
			<SimpleShowLayout>
				<TextField source="username" />
				<TextField source="id" />
			</SimpleShowLayout>
		</Show>
	)
}

