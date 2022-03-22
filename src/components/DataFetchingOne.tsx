import React, { useState, useEffect } from "react";
import axios from "axios";

// https://www.youtube.com/watch?v=snzS7-73SEQ&t=21s

const DataFetchingOne: React.FC = () => {

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [post, setPost] = useState<any>({});

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts/1")
			.then((response) => {
				setLoading(false);
				setPost(response.data);
				setError("");
			})
			.catch((err) => {
				setLoading(false);
				setPost({});
				setError("something went wrong!");
			});
	}, []);

	return (
		<>
			<p>{loading ? "Loading" : post.title}</p>
			<p>{error ? error : null}</p>
		</>
	);
};

export default DataFetchingOne;
