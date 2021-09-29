import React from 'react'
import { Admin, Resource } from 'react-admin'
import { UserList, UserShow } from './views/users'
import { ProductList, ProductEdit, ProductCreate, ProductShow } from './views/products'
import { OrderList, OrderShow, OrderEdit } from './views/orders'
import { Group } from '@material-ui/icons'
import Home from './Home'
import dataProvider from './providers/dataProvider'
import authProvider from './providers/authProvider'




const App = () => {
	return (
		<Admin dashboard={Home} authProvider={authProvider} dataProvider={dataProvider}>
			<Resource name="products" show={ProductShow} list={ProductList} edit={ProductEdit} create={ProductCreate} />
			<Resource name="users" list={UserList} show={UserShow} icon={Group} />
			<Resource name="orders" list={OrderList} edit={OrderEdit} show={OrderShow} />
		</Admin>
	)
}

export default App