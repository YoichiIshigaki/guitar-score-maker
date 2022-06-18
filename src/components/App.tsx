import React from "react";
import { Top,Login,MyPage,TestPage } from './pages';
import { Route,Routes,BrowserRouter } from "react-router-dom";
import { Config } from "../modules/config/"
import AuthUserProvider from "../provider/AuthUserProvider";
import { PublicRoute,PrivateRoute } from "./template";
import { SongCardsContextProvider } from "../context/songCardsContext";
const App: React.FC = () => {

	console.log(Config);
	
	return (
		<>
			<AuthUserProvider>
				<SongCardsContextProvider>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Top/>} />
							<Route path="/login" element={<PublicRoute element={<Login/>}/>} />
							<Route path="/mypage" element={<PrivateRoute element={<MyPage/>}/>} />
							{/* test route */}
							<Route path="/test/use-fetch-songs" element={<TestPage/>} />
						</Routes>
					</BrowserRouter>
				</SongCardsContextProvider>
			</AuthUserProvider>
		</>
	);
};

export default App;
