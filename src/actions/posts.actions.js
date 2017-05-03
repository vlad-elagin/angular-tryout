function createPost(name) {
  return {
    type: 'CREATE_POST',
    payload: name,
  };
}

function removePost(id) {
  return {
    type: 'REMOVE_POST',
    payload: id,
  };
}

function addComment(to, by, text) {
  return {
    type: 'ADD_COMMENT',
    payload: { to, by, text },
  };
}

export default {
  createPost,
  removePost,
  addComment,
};
