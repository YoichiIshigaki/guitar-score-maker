import React from "react";
import { Top,Login } from './pages';
import { Route,Routes , BrowserRouter } from "react-router-dom";
import Config from "../modules/config/config"
import AuthUserProvider from "../context/AuthContext";

const App: React.FC = () => {

	console.log(Config);
	
	return (
		<>
			<AuthUserProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Top/>} />
						<Route path="/login" element={<Login/>} />
					</Routes>
				</BrowserRouter>
			</AuthUserProvider>
		</>
	);
};

export default App;
