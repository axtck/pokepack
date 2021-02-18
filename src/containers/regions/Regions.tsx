import React, { FunctionComponent, useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { RegionType } from '../../types';
import api from '../../api/api';
import Loading from '../../components/loading/Loading';
import SelectRegion from './SelectRegion';
import { useHistory } from 'react-router-dom';

interface RegionsProps { };

const Regions: FunctionComponent<RegionsProps> = () => {
    const history = useHistory();

    const [regions, setRegions] = useState<RegionType[] | null>(null);
    const [region, setRegion] = useState<string>("");
    const [valid, setValid] = useState<Boolean>(false);

    useEffect(() => {
        api.get('/pokedex/')
            .then((response) => {
                setRegions((regions) => {
                    return regions = response.data.results;
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const handleRegionSelectChanged = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();

        if (!e.target.value || e.target.value === null) {
            setValid(false)
            setRegion(e.target.value);
        } else {
            setValid(true)
        }
        console.log(e.target.value);
    }

    console.log(valid);
    console.log(regions)

    const handleGoClicked = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        history.push('/');
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
            <SelectRegion regions={regions} onRegionSelectChange={handleRegionSelectChanged} />
            <button className="mt-3 btn btn-primary" onClick={handleGoClicked}>GO</button>
        </div>
    )
}

export default Regions;
