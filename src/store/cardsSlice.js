import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../utils/api';
import { testJWT, options } from '../utils/utils';

const { REACT_APP_KEY } = process.env;
const api = new Api(options, REACT_APP_KEY || testJWT);

export const getCards = createAsyncThunk('cards/getCards', async ({ query, loadNextPage }, { dispatch }) => {
  if (loadNextPage) {
    try {
      dispatch(nextPageLoaderToggler(false));
      const result = await api.getCards(query, loadNextPage);
      dispatch(cardsSetAdditional(result.results));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(nextPageLoaderToggler(true));
    }
  } else {
    try {
      dispatch(cardsLoaderToggler(false));
      const result = await api.getCards(query, loadNextPage);
      dispatch(cardsSet(result.results));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(cardsLoaderToggler(true));
    }
  }
});

export const setLikes = createAsyncThunk('cards/handleLikes', async ({ id, isLiked }, { dispatch }) => {
  if (!isLiked) {
    try {
      dispatch(cardsLikeToggled(id));
      await api.setLike(id);
    } catch (err) {
      console.log(err);
      // Не изменять состояние лайка в случае ошибки
      dispatch(cardsLikeToggled(id));
    }
  } else {
    try {
      dispatch(cardsLikeToggled(id));
      await api.deleteLike(id);
    } catch (err) {
      console.log(err);
      dispatch(cardsLikeToggled(id));
    }
  }
});

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    query: null,
    loader: {
      cardsLoader: null,
      nextPageLoader: null,
    },
  },
  reducers: {
    cardsSet(state, action) {
      return {
        ...state,
        cards: action.payload,
      };
    },
    cardsSetAdditional(state, action) {
      state.cards.push(...action.payload);
    },
    cardsLikeToggled(state, action) {
      const card = state.cards.find((item) => item.id === action.payload);
      card.liked_by_user = !card.liked_by_user;
    },
    cardsDelete(state, action) {
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };
    },
    cardsSetQuery(state, action) {
      return {
        ...state,
        query: action.payload,
      };
    },
    cardsLoaderToggler(state, action) {
      return {
        ...state,
        loader: {
          ...state.loader,
          cardsLoader: action.payload,
        },
      };
    },
    nextPageLoaderToggler(state, action) {
      return {
        ...state,
        loader: {
          ...state.loader,
          nextPageLoader: action.payload,
        },
      };
    },
  },
});

export const {
  cardsSet, cardsLikeToggled, cardsDelete, cardsSetAdditional, cardsSetQuery, cardsLoaderToggler, nextPageLoaderToggler,
} = cardsSlice.actions;
export default cardsSlice.reducer;
