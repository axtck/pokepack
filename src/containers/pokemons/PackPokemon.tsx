import React, { FunctionComponent } from 'react';
import { PokemonType } from '../../types';

interface PackPokemonProps {
    pokemon: PokemonType;
};

const PackPokemon: FunctionComponent<PackPokemonProps> = ({ pokemon }) => {

    return (
        <div>
            <h3>Packed Pokémon!</h3>
            <p>{pokemon.pokemon_species}</p>
        </div>
    )
}

export default PackPokemon;
