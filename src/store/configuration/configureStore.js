import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import api from "../middleware/api";
import reducer from "./reducer";

export default function configure() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  });
}
