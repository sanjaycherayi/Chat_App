import createSagaMiddleware from 'redux-saga'
import { persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux'
import storage from 'redux-persist/lib/storage';
import rootSaga from './rootSaga'
import rootReducer from './rootReducer';
const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
    key: 'chat',
    storage,
    whitelist: ['Admin'],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer,
    process.env.NODE_ENV === 'development'
      ? applyMiddleware(sagaMiddleware, createLogger({collapsed: (getState, action, logEntry) => !logEntry.error}))
      : applyMiddleware(sagaMiddleware),
  )

  sagaMiddleware.run(rootSaga)

  export { store }