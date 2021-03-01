import { FunctionComponent, useState, useEffect } from 'react';
import { PokemonDataType, PokemonType } from '../../types';
import api from '../../api/api';
import Loading from '../loading/Loading';

interface PokemonProps {
    pokemon: PokemonType;
};

const Pokemon: FunctionComponent<PokemonProps> = ({ pokemon }) => {

    /**********
     * Render
     **********/

    return (
        <div>
            
        </div>
    )
}

export default Pokemon
