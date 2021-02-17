import React, { FunctionComponent, useState, useEffect, ChangeEvent } from 'react';
import api from '../../api/api';
import { PokedexType, PokemonType } from '../../types';;

interface PokemonsProps { };

const Pokemons: FunctionComponent<PokemonsProps> = () => {
    const [pokedexes, setPokedexes] = useState<PokedexType[] | null>(null);
    const [pokemons, setPokemons] = useState<Array<PokemonType>>();

    console.log(pokedexes);

    useEffect(() => {
        api.get('/pokedex')
            .then((response) => {
                setPokedexes(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    const handleSelectChanged = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
    }


    if (pokedexes === null || pokedexes === undefined) {
        return null;
    }

    const pokedexOptions = pokedexes.map((pd, i) => {
        return <option value={pd.name} key={i}>pd.name</option>
    })

    return (
        <div className="form-group">
            <h3>Search game.</h3>
            <div>
                <label htmlFor="select-pokedex">White player</label>
                <select
                    name="pokedex"
                    id="select-pokedex"
                    className="form-control"
                    onChange={handleSelectChanged}
                >
                    <option disabled></option>
                    {pokedexOptions}
                </select>
            </div>
        </div>
    )
}

export default Pokemons
