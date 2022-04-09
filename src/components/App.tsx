import React from "react";
import {Top} from './pages';
import { Route,Routes , BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Top/>} />
      			</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
