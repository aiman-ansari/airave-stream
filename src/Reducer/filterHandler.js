export const FilterHandler = (state, action) => {
  const initial = {
    category: "",
    active: "all",
  };
  switch (action.type) {
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        category: action.payload,
        active: action.payload,
      };

    case "ALL":
      return initial;
    default:
      break;
  }
};
