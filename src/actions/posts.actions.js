function createPost(name) {
	return {
		type: 'CREATE_POST',
		payload: name
	}
}

function removePost(id) {
	return {
		type: 'REMOVE_POST',
		payload: id
	}
}

export default {
	createPost,
	removePost
}