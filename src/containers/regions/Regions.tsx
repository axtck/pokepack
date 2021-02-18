import React, { FunctionComponent, useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { NameAndUrl } from '../../types';
import api from '../../api/api';
import Loading from '../../components/loading/Loading';
import RegionSelect from './RegionSelect';
import { useHistory } from 'react-router-dom';

interface RegionsProps { };

const Regions: FunctionComponent<RegionsProps> = () => {
    const history = useHistory();

    const [regions, setRegions] = useState<NameAndUrl[] | null>(null);
    const [region, setRegion] = useState<string>("");

    const [validBtnClass, setValidBtnClass] = useState<string>("btn-danger");

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
        if (region) {
            setValidBtnClass("btn-success");
        } else {
            setValidBtnClass("btn-danger");
        }
    }, [region])

    const handleRegionSelectChanged = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setRegion(e.target.value);
    }

    const handleGoClicked = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (region) {
            history.push('/home/pokemons/' + region);
        }
    }

    /*********
     * Render 
     *********/

    if (regions === null || regions === undefined) {
        return <Loading />;
    }

    return (
        <div className="form-group">
            <h3>Select Region</h3>
            <RegionSelect regions={regions} onRegionSelectChange={handleRegionSelectChanged} />
            <button className={"mt-3 btn " + validBtnClass} onClick={handleGoClicked}>GO</button>
        </div>
    )
}

export default Regions;
