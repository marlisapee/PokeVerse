import { useEffect, useState } from 'react';
import { getPokemon } from '../services/pokeService';

const usePokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonObjects, setPokemonObjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const pokemonData = await getPokemon();
        setPokemon(pokemonData.results);

        const fetchedPokemonObjects = await Promise.all(
          pokemonData.results.map(async (poke) => ({
            name: poke.name,
            imgUrl: `https://img.pokemondb.net/artwork/${poke.name}.jpg`,
          }))
        );

        setPokemonObjects(fetchedPokemonObjects);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return { pokemon, pokemonObjects, loading, error };
};

export default usePokemon;
