class Posts {

	getPosts() {
		return JSON.parse(localStorage.getItem('testApp')) || {};
	}

	addPost(name) {
		let posts = JSON.parse(localStorage.getItem('testApp')) || {};
		const lastItemId = Object.keys(posts).length > 0 ? 
			Object.keys(posts).length : 
			0;
		posts[lastItemId] = { 
			name: name,
			comments: [] 
		};
		localStorage.setItem('testApp', JSON.stringify(posts));
		return posts;
	}

	deletePost(id) {
		let posts = JSON.parse(localStorage.getItem('testApp'));
		if (!posts && posts.length == 0 || !posts[id]) return;
		delete posts[id];
		localStorage.setItem('testApp', JSON.stringify(posts));
		console.log(posts);
		return posts;
	}

	addComment(author, text) {
		console.log('adding comment');
	}

}

export default Posts;