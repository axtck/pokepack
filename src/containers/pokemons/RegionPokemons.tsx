import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

interface RegionPokemonProps {};

interface ParamsProps {
    region: string;
}

const RegionPokemons: FunctionComponent<RegionPokemonProps> = () => {
    const params = useParams<ParamsProps>();

    console.log(params.region);
    
    return (
        <div>
            region pokemons
            
        </div>
    )
}

export default RegionPokemons;
