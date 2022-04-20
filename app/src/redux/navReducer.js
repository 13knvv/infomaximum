const SET_IS_OPEN_NAV = "SET_IS_OPEN_NAV"

let initialState = {
  isOpenNav: false
}

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_OPEN_NAV:
      return {
        ...state,
        isOpenNav: action.bolean
      }

    default:
      return state
  }
};

export const setIsOpenNavAC = (bolean) => ({ type: SET_IS_OPEN_NAV, bolean})

export default navReducer
