import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const PostList: React.FC = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		axios
			.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				setPosts(response.data);
			})
			.catch(err => {
				console.error('Error fetching data:', err);
				setError(err?.message ?? 'Error fetching data');
			})
			.then(() => setLoading(false));
	}, []); // run once on mount

    

	
      useEffect(() => {
            axios.post('https://jsonplaceholder.typicode.com/posts', {
title: 'new post',
body: 'this is a new post',
});
		
		
		axios
			.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				setPosts(response.data);
			})
			.catch(err => {
				console.error('Error fetching data:', err);
				setError(err?.message ?? 'Error fetching data');
			})
			.then(() => setLoading(false));
	}, []);
		
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<ul>
			{posts.map(post => (
				<li key={post.id}>{post.title}</li>
			))}
		</ul>
	);
}

export default PostList;