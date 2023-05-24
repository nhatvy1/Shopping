import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import App from './App';

const Layout = (props)=> {
    return (
        <>
			<Routes>
				<Route path="/" element={<App />} >
					<Route index element={<Home />} />
				</Route>
			</Routes>
        </>
    )
}

export default Layout