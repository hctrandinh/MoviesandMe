// Store/configureStore.js

import { createStore } from "redux";
import toggleFavorite from "./Reducers/favoriteReducers.js";

export default createStore(toggleFavorite);
