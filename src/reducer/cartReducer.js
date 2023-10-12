export function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
        product: [...state.product, action.payload],
      };
  }
}
