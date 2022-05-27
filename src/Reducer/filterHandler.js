export const FilterHandler = (state, action) => {
    const initial = {
        all : ""
    }
    switch (action.type) {
        case 'FILTER_BY_CATEGORY':
            return{...state, category:action.payload}
        
        case 'ALL' :
             return initial
        default:
            break;
    }
}