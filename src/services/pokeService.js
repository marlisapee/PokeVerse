import axios from 'axios';

export const getPokemon = async () => {
  try {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    console.log('response: ', response.data);
    return response.data;
  } catch (error) {
    console.error('error fetching pokemon', error);
  }
};

export const getOnePokemon = async (name) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    console.log('response: ', response.data);
    return response.data;
  } catch (error) {
    console.error('error fetching pokemon', error);
  }
};
