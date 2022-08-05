export const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        isAuthenticated: true,
        token: action.payload.encodedToken,
        user: action.payload.foundUser.firstName,
      };
    case "signup":
      return {
        isAuthenticated: true,
        token: action.payload.encodedToken,
      };
    case "logout":
      return {
        isAuthenticated: false,
      };

    default:
      break;
  }
};
