export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_DATA":
      console.log(action.payload, "datat changed");
      return {
        ...state,
        isLoogedIn: action.payload,
      };
    default:
      return state;
  }
}
