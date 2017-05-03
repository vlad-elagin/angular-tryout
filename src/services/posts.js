class Posts {

	getPosts() {
		return JSON.parse(localStorage.getItem('testApp')) || {};
	}

	addPost(name) {

		let posts = JSON.parse(localStorage.getItem('testApp')) || {};
		const lastItemId = Object.keys(posts).length > 0 ? 
			Math.max( ...Object.keys(posts) ) : 
			0;
		posts[lastItemId + 1] = { 
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
		return posts;
	}

	addComment(to, by, text) {
		console.log('adding comment');
		let posts = JSON.parse(localStorage.getItem('testApp'));
		if (!posts || !posts[to]) return;
		posts[to].comments.push({
			author: by,
			text: text
		});
		localStorage.setItem('testApp', JSON.stringify(posts));
		return posts;
	}

}

export default Posts;