export const FilterHandler = (state, action) => {
  const initial = {
    category: "",
    active: "all",
    search: "",
  };
  switch (action.type) {
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        category: action.payload,
        active: action.payload,
      };
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "ALL":
      return initial;
    default:
      break;
  }
};
