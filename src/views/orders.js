import React from 'react'
import { List, Datagrid, TextField, BooleanField, BooleanInput, ReferenceField, EditButton, ShowButton, Show, SimpleShowLayout, NumberField, DateField, Edit, Create, SimpleForm, TextInput, NumberInput, DateInput, ImageInput, ImageField } from 'react-admin'


export const OrderList = props => {
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<BooleanField source="shipped" />
				<BooleanField source="finished" />
				<NumberField source="quantity" />
				<TextField source="address" />
				<ReferenceField source="orderedProduct" reference="products">
					<TextField source="id" />
				</ReferenceField>
				<ReferenceField source="user" reference="users">
					<TextField source="id" />
				</ReferenceField>
				<DateField source="created" />
				<TextField source="id" />
				<ShowButton />
				<EditButton />
			</Datagrid>
		</List>
	)
}

export const OrderEdit = props => {
	return (
		<Edit {...props}>
      <SimpleForm>
        <BooleanInput source="shipped" />
        <BooleanInput disabled source="finished" />
        <NumberInput disabled source="quantity" />
        <TextInput disabled source="address" />
        <TextInput disabled source="orderedProduct" />
        <TextInput disabled source="user" />
        <DateInput disabled source="created" />
        <TextInput disabled source="id" />
        </SimpleForm>
    </Edit>
	)
}

export const OrderShow = props => {
	return (
		<Show {...props}>
			<SimpleShowLayout>
				<BooleanField source="shipped" />
				<BooleanField source="finished" />
				<NumberField source="quantity" />
				<TextField source="address" />
				<ReferenceField source="orderedProduct" reference="products">
					<TextField source="id" />
				</ReferenceField>
				<ReferenceField source="user" reference="users">
					<TextField source="id" />
				</ReferenceField>
				<DateField source="created" />
				<TextField source="id" />
			</SimpleShowLayout>
		</Show>
	)
}

