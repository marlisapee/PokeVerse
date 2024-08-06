import { useEffect, useState } from 'react';
import { getOnePokemon } from '../services/pokeService';

const useSinglePokemon = (name) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSinglePokemon = async () => {
      try {
        setLoading(true);
        const pokemonData = await getOnePokemon(name);
        setPokemonData(pokemonData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (name) {
      fetchSinglePokemon();
    }
  }, [name]);

  return { pokemonData, loading, error };
};

export default useSinglePokemon;
