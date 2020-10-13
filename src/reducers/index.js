export default function (state = [], action) {
  switch (action.type) {
    case "TOGGLE_LOGIN":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
}
