function selectPost(id) {
	return {
		type: 'SELECT_POST',
		payload: id
	}
}

function newNameChanged(name) {
	return {
		type: 'NEW_NAME_CHANGED',
		payload: name
	}
}

export default {
	selectPost,
	newNameChanged
}