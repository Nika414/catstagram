/* eslint-disable no-use-before-define */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../utils/api';
import { unsplashJWT, options } from '../../utils/utils';

const api = new Api(options, unsplashJWT);

// eslint-disable-next-line no-unused-vars
export const getCards = createAsyncThunk('cards/getCards', async (query, { rejectWithValue, dispatch }) => {
  try {
    const result = await api.getCards(query);
    dispatch(setInitialCards(result.results));
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Got it!');
  }
});

// export const getMoreCards = createAsyncThunk('cards/getMoreCards', async (_, { rejectWithValue, dispatch }) => {
//   try {
//     const result = await fetch(`${baseUrl}search/photos?page=${options.page += 1}&query=cats&per_page=22&orientation=landscape`, {
//       headers: {
//         Authorization: `Bearer ${unsplashJWT}`,
//       },
//     }).then((res) => res.json());
//     console.log(result);
//     dispatch(setMoreCards(result.results));
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log('Got it!');
//   }
// });

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
  },
  reducers: {
    setInitialCards(state, action) {
      state.cards.push(...action.payload);
    },
  },
});

export const {
  setInitialCards, setMoreCards,
} = cardsSlice.actions;
export default cardsSlice.reducer;
