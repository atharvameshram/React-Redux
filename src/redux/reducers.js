const initialState = {
    modelName: '',
};
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MODEL_NAME':
            return {
                ...state,
                modelName: action.payload
            };
        default:
        return state;
    }
};
  
export default rootReducer;
  