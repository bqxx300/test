import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './components/Main'
import './css/app.css'

export const App: FC = () => {
	return <BrowserRouter>
		<div className="app">
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</div>
	</BrowserRouter>
}
