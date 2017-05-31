import {
  ActionConst,
} from 'react-native-router-flux';

const initialState = {
  scene: {},
  open: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.PUSH:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.BACK_ACTION:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.REFRESH:
      return {
        ...state,
        open: action.open,
      };
    default:
      return state;
  }
}