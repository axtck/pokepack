import axios from 'axios';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import Loading from '../../components/loading/Loading';
import Pokemon from '../../components/pokemon/Pokemon';
import { PokemonType, NameAndUrl, PokemonDataType } from '../../types';

interface RegionPokemonProps { };

interface ParamsProps {
    region: string;
}

const RegionPokemons: FunctionComponent<RegionPokemonProps> = () => {
    const params = useParams<ParamsProps>();

    const [regions, setRegions] = useState<NameAndUrl[] | null>(null);
    const [regionPokemons, setRegionPokemons] = useState<PokemonType[] | null>(null);
    const [regionPokemonDetails, setRegionPokemonDetails] = useState<PokemonDataType[] | null | void[] | any>(null);

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
        if (regions !== null && regions !== undefined) {
            const matchingUrl = regions.filter(r => r.name === params.region)[0].url;
            axios.get(matchingUrl)
                .then((response) => {
                    setRegionPokemons(response.data.pokemon_entries);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [regions]);

    useEffect(() => {
        const allData: PokemonDataType[] = [];
        regionPokemons?.map((rp) => {
            api
                .get("/pokemon/" + rp.entry_number)
                .then(res => {
                    allData.push(res.data)
                })
        });
        Promise.all(allData).then((alld) => {
            console.log(alld)
        });



        /*if (regionPokemons) {
            Promise.all(
                tous
            ).then((allData) => {
                console.log(allData);
            })
        }*/

        /*if (regionPokemons) {
            Promise.all(
                regionPokemons?.map(p => api
                    .get("/pokemon/" + p.entry_number)
                    .then(res => res.data)
                )
            ).then((allData) => {
                const combined = regionPokemons.map((rp, i) => {
                    return { ...rp, data: allData[i] }
                });
                setRegionPokemonDetails(combined);
            });
        }*/
    }, [regionPokemons]);



    /*********
     * Render
     *********/
    if (regions === null || regions === undefined || regionPokemons === null || regionPokemons === undefined) {
        return <Loading />;
    }

    const mappedPokemons = regionPokemons.map((rp, i) => {
        return <Pokemon key={i} pokemon={rp} />
    });




    return (
        <div>
            <h3>Region Pokémons</h3>
            {mappedPokemons}
        </div>
    )
}

export default RegionPokemons;
