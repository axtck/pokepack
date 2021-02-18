import { FunctionComponent, useState, useEffect } from 'react';
import { PokemonDataType, PokemonType } from '../../types';
import api from '../../api/api';
import Loading from '../loading/Loading';

interface PokemonProps {
    pokemon: PokemonType;
};

const Pokemon: FunctionComponent<PokemonProps> = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState<PokemonDataType | null>(null);

    useEffect(() => {
        api.get('/pokemon/' + pokemon.entry_number)
            .then((response) => {
                setPokemonData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    /**********
     * Render
     **********/

    if (pokemonData === null) {
        return <Loading />
    }

    return (
        <div>
            {pokemonData.name}
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
    )
}

export default Pokemon
