import React from "react";
import { Top,Login,MyPage } from './pages';
import { Route,Routes,BrowserRouter } from "react-router-dom";
import { Config } from "../modules/config/"
import AuthUserProvider from "../provider/AuthUserProvider";
import { PublicRoute,PrivateRoute } from "./template";
const App: React.FC = () => {

	console.log(Config);
	
	return (
		<>
			<AuthUserProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Top/>} />
						<Route path="/login" element={<PublicRoute element={<Login/>}/>} />
						<Route path="/mypage" element={<PrivateRoute element={<MyPage/>}/>} />
					</Routes>
				</BrowserRouter>
			</AuthUserProvider>
		</>
	);
};

export default App;
