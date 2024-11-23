import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { resetableRootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: resetableRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions and state
        ignoredActionPaths: ["payload.timestamp", "meta.arg"],
        ignoredPaths: ["items.dates"],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
