import React from "react";
import { Top,Login } from './pages';
import { Route,Routes , BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
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
