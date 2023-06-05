import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import App from './App';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Content/Dashboard/Dashboard';
import ManageUsers from './components/Admin/Content/ManageUsers/ManageUsers';

const Layout = (props)=> {
    return (
        <>
			<Routes>
				<Route path="/" element={<App />} >
					<Route index element={<Home />} />
					<Route path='login' element={<Login />}/>
					<Route path='register' element={<Register />}/>
				</Route>

				<Route path='admin' element={<Admin />}>
					<Route index element={<Dashboard />}/>
					<Route path="manage-users" element={<ManageUsers />} />
				</Route>
			</Routes>

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
        </>
    )
}

export default Layout