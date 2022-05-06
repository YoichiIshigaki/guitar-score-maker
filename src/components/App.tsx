import React from "react";
import { Top,Login } from './pages';
import { Route,Routes , BrowserRouter } from "react-router-dom";
import Config from "../modules/config/config"

const App: React.FC = () => {

	console.log(Config);
	
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Top/>} />
					<Route path="/login" element={<Login/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
