import React, { FunctionComponent, useState, useEffect, ChangeEvent } from 'react';
import api from '../../api/api';
import Loading from '../../components/loading/Loading';
import { PokemonType } from '../../types';;

interface PokemonsProps { };

const Pokemons: FunctionComponent<PokemonsProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonType[] | null>(null);


    /*useEffect(() => {
        api.get('/pokemons/') // use url from region
            .then((response) => {
                setPokemons(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    });*/

    if (pokemons === null) {
        return <Loading />;
    }

    return (
        <div className="form-group">
            pokemons
        </div>
    )
}

export default Pokemons
