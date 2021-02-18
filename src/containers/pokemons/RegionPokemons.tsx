import axios from 'axios';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import Loading from '../../components/loading/Loading';
import Pokemon from '../../components/pokemon/Pokemon';
import { PokemonType, NameAndUrl } from '../../types';

interface RegionPokemonProps { };

interface ParamsProps {
    region: string;
}

const RegionPokemons: FunctionComponent<RegionPokemonProps> = () => {
    const params = useParams<ParamsProps>();

    const [regions, setRegions] = useState<NameAndUrl[] | null>(null);
    const [regionPokemons, setRegionPokemons] = useState<PokemonType[] | null>(null);

    useEffect(() => {
        api.get('/pokedex/')
            .then((response) => {
                setRegions(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        let matchingUrl;
        if (regions !== null && regions !== undefined) {
            matchingUrl = regions.filter(r => r.name === params.region);
            axios.get(matchingUrl[0].url)
                .then((response) => {
                    setRegionPokemons(response.data.pokemon_entries);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [regions])


    /*********
     * Render
     *********/


    // does this also go for null checking? clean
    const mappedPokemons = regionPokemons?.map((rp, i) => {
        return <Pokemon key={i} pokemon={rp} />
    })

    if (regions === null || regions === undefined) {
        return <Loading />
    }


    return (
        <div>
            <h3>Region Pokémons</h3>
            {mappedPokemons}
        </div>
    )
}

export default RegionPokemons;
