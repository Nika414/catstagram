/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';

import cardsReducer from './cardsSlice';

export default configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
