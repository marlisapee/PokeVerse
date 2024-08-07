import { createContext, useContext, useEffect, useReducer } from 'react';
import usePokemon from '../hooks/usePokemon';

export const PokemonContext = createContext([]);
export const PokemonDispatchContext = createContext(null);

const initialState = {
  pokemon: [],
  loading: false,
  error: '',
};

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);
  const { pokemon, error, loading } = usePokemon();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: loading });
    if (error) {
      dispatch({ type: 'SET_ERROR', payload: error });
    }
    if (pokemon) {
      dispatch({ type: 'SET_POKEMON', payload: pokemon });
    }
  }, [pokemon, loading, error]);

  return (
    <PokemonContext.Provider value={state}>
      <PokemonDispatchContext.Provider value={dispatch}>
        {children}
      </PokemonDispatchContext.Provider>
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
export const usePokemonDispatchContext = () =>
  useContext(PokemonDispatchContext);
