import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Home/Footer/Footer';

const App = () => {
	const count = useSelector(state => state.counter.count);
	const dispatch = useDispatch();

	return (
		<>
			<div className="app-container">
				<div className="header-container">
					<Header />
				</div>
				<div className="main-container">
					<div className="app-content">
						<Outlet />
					</div>
				</div>
				<div>
					<Footer />
				</div> 
			</div>
		</>
	);
}

export default App;
