import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

import { AuthProvider } from './context/AuthContext'

import Home from './pages/Home/Home'
import ProductCharacteristics from './pages/ProductCharacteristics/ProductCharacteristics'
import ProductComments from './pages/ProductComments/ProductComments'
import ProductPage from './pages/ProductPage/ProductPage'
import UserCabinet from './pages/UserCabinet/UserCabinet'

import ProductPageLayout from './components/ui/ProductPageLayout/ProductPageLayout'

import './App.css'
import MainLayout from './components/ui/MainLayout/MainLayout'
import UserCabinetLayout from './components/ui/UserCabinetLayout/UserCabinetLayout'

const App = () => {
	return (
		<AuthProvider>
			<div className='App'>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path='/product/:id' element={<ProductPageLayout />}>
							<Route index element={<ProductPage />} />
							<Route path={'characteristics'} element={<ProductCharacteristics />} />
							<Route path={'comments'} element={<ProductComments />} />
						</Route>
						<Route
							path='/cabinet'
							element={
								// With this user that is not logged in can't see this pages
								<PrivateRoute>
									<UserCabinetLayout />
								</PrivateRoute>
							}>
							<Route index path={'personal-information'} element={<UserCabinet />} />
						</Route>
						<Route path='*' element=<h1>404</h1> /> {/* !!!!!!!! */}
					</Route>
				</Routes>
			</div>
		</AuthProvider>
	)
}

export default App
