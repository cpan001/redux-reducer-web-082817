export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      const newFriends = [...state.friends, action.friend];
      return { friends: newFriends };
      break;
    case "REMOVE_FRIEND":
      const newFriends2 = state.friends.filter(
        friend => friend.id !== action.id
      );
      return { friends: newFriends2 };
      break;
    default:
      return state;
  }
}
