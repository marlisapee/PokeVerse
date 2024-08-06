import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from './components/header/Header';
import Card from './components/card/Card';
import usePokemon from './hooks/usePokemon';
import Spinner from './components/spinner/Spinner';
import NavBar from './components/navbar/NavBar';

const links = ['link1', 'link2', 'link3'];
const listItems = ['item1', 'item2', 'item3'];

const App = () => {
  const { pokemon, loading, error, pokemonObjects } = usePokemon();

  return (
    <>
      <NavBar />
      <Header text="My Pokedex" size="100pt" />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          padding: '20px',
        }}
      >
        {loading && <Spinner />}
        {error && <p>Error: {error}</p>}
        {pokemonObjects &&
          pokemonObjects.map((poke, index) => (
            <Card
              key={index}
              cardText={poke.name}
              cardTitle={poke.name}
              imgUrl={poke.imgUrl}
              links={links}
              listItems={listItems}
            />
          ))}
      </div>
    </>
  );
};

export default App;
