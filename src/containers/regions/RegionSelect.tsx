import React, { ChangeEvent, FunctionComponent } from 'react';
import { NameAndUrl } from '../../types';

interface SelectRegionProps {
    regions: NameAndUrl[];
    onRegionSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const RegionSelect: FunctionComponent<SelectRegionProps> = ({ regions, onRegionSelectChange }) => {

    /**********
     * Render
     **********/

    const pokedexOptions = regions.map((r, i) => {
        return <option value={r.name} key={i}>{r.name}</option>
    });

    return (
        <div>
            <label htmlFor="select-region">Region</label>
            <select
                name="region"
                id="select-region"
                className="form-control"
                onChange={onRegionSelectChange}
            >
                <option></option>
                {pokedexOptions}
            </select>
        </div>
    );
}

export default RegionSelect;
