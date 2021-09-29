import React from 'react'
import { List, Datagrid, TextField, SelectInput, useRecordContext, ShowButton, Show, SimpleShowLayout, NumberField, DateField, EditButton, Edit, Create, SimpleForm, TextInput, NumberInput, DateInput, ImageInput, ImageField } from 'react-admin'
import ReviewsField from './customViews/Reviews'
import RatingField from './customViews/Rating'

export const ProductList = props => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source="label" />
				<NumberField source="price" />
				<NumberField source="stock" />
				<TextField source="category" />
				<DateField source="created" />
				<TextField source="id" />
				<ShowButton />
				<EditButton />
			</Datagrid>
		</List>
	)
}

export const ProductEdit = props => {
	return (
		<Edit {...props}>
      <SimpleForm>
        <TextInput source="label" />
        <TextInput source="description" />
        <NumberInput source="price" />
        <NumberInput source="stock" />
				<SelectInput source="category" choices={[
					{ id: 'Electronics', name: 'Electronics' },
					{ id: 'Books', name: 'Books' },
					{ id: 'Clothing', name: 'Clothing' }
				]} />
        <DateInput disabled source="created" />
        <TextInput disabled source="id" />
				<ImageInput source="image" label="Product image" accept="image/*">
					<ImageField source="src" title="title" />
				</ImageInput>
      </SimpleForm>
    </Edit>
	)
}

export const ProductCreate = props => {
	return (
		<Create {...props}>
      <SimpleForm>
        <TextInput required source="label" />
        <TextInput required source="description" />
        <NumberInput required source="price" />
        <NumberInput required source="stock" />
        <SelectInput source="category" choices={[
					{ id: 'Electronics', name: 'Electronics' },
					{ id: 'Books', name: 'Books' },
					{ id: 'Clothing', name: 'Clothing' }
				]} />
        <DateInput disabled source="created" />
        <TextInput disabled source="id" />
				<ImageInput required source="image" label="Product image" accept="image/*">
					<ImageField source="src" title="title" />
				</ImageInput>
      </SimpleForm>
    </Create>
	)
}

const ProductImageField = ({ source }) => {
	const record = useRecordContext()
	return (
		 <img src={`/api/products/image/${record.id}`} alt="Product image" />
	)
}

export const ProductShow = props => {
	return (
		<Show {...props}>
			<SimpleShowLayout>
				<RatingField source="reviews" />
				<TextField source="description" />
				<NumberField source="price" />
				<NumberField source="stock" />
				<TextField source="category" />
				<DateField source="created" />
				<TextField source="id" />
				<ProductImageField source="image" />
				<ReviewsField source="reviews" />
			</SimpleShowLayout>
		</Show>
	)
}



