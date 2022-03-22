import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
	loading: true,
	error: "",
	post: {},
};

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				loading: false,
				post: action.payload,
				error: "",
			};
		case "FETCH_ERROR":
			return {
				loading: false,
				post: {},
				error: "something went wrong!",
			};
		default:
		return state;
	}
};

const DataFetchingTwo: React.FC = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		console.log("start get api");
		axios
			.get("https://jsonplaceholder.typicode.com/posts/1")
			.then((response) => {
				console.log("success");
				dispatch({ type: "FETCH_SUCCESS", payload: response.data });
			})
			.catch((error) => {
				console.log("error");
				dispatch({ type: "FETCH_ERROR" });
			});
		console.log("end get api");
	}, []);

	return (
		<div>
			<p>{state.loading ? "Loading" : state.post.title}</p>
			<p>{state.error ? state.error : null}</p>
		</div>
	);
};

export default DataFetchingTwo;
