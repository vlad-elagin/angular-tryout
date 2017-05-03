function selectPost(id) {
  return {
    type: 'SELECT_POST',
    payload: id,
  };
}

function newNameChanged(name) {
  return {
    type: 'NEW_NAME_CHANGED',
    payload: name,
  };
}

function newCommentChanged(text) {
  return {
    type: 'NEW_COMMENT_CHANGED',
    payload: text,
  };
}

function pickAuthor(name) {
  return {
    type: 'PICK_AUTHOR',
    payload: name,
  };
}

export default {
  selectPost,
  newNameChanged,
  newCommentChanged,
  pickAuthor,
};
