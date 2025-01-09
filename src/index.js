import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RecipeStore from './store/RecipeStore';
//import { createContext } from 'vm';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      recipe: new RecipeStore(),
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);