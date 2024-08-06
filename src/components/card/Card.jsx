import React, { useState } from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import useSinglePokemon from '../../hooks/useSinglePokemon';

import './Card.css';

const Card = ({ imgUrl, cardTitle, cardText, listItems, links }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { pokemonData } = useSinglePokemon(selectedPokemon);

  const handleCardClick = (name) => {
    setSelectedPokemon(name);
    setExpanded(!expanded);
  };

  return (
    <BootstrapCard className="card">
      <BootstrapCard.Img
        className="card-img-top"
        onClick={() => handleCardClick(cardTitle)}
        variant="top"
        src={imgUrl}
      />
      <BootstrapCard.Body className="card-body">
        <BootstrapCard.Title className="card-title">
          {cardTitle}
        </BootstrapCard.Title>
        {expanded ? (
          <>
            <BootstrapCard.Text className="card-text">Moves</BootstrapCard.Text>
            <ListGroup className="list-group-flush">
              {selectedPokemon &&
                pokemonData?.moves.map((move, index) => (
                  <ListGroup.Item key={index}>{move.move.name}</ListGroup.Item>
                ))}
            </ListGroup>
            {links &&
              links.map((link, index) => (
                <BootstrapCard.Link href="#" key={index}>
                  {link}
                </BootstrapCard.Link>
              ))}
            <BootstrapCard.Link href="#">Another Link</BootstrapCard.Link>
          </>
        ) : (
          <Button onClick={() => handleCardClick(cardTitle)} variant="primary">
            More details
          </Button>
        )}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
