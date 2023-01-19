import { configureStore } from '@reduxjs/toolkit';

import cardsReducer from './cardsSlice';
import filterReducer from './filterSlice';

export default configureStore({
  reducer: {
    cards: cardsReducer,
    filter: filterReducer,
  },
});
