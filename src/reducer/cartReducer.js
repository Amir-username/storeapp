export function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
        products: [...state.products, action.payload],
      };

    case 'del':
      return {
        ...state,
        count: state.count - 1,
        products: [...state.products, action.payload],
      };
  }
}
