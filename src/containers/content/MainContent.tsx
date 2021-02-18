import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../components/home/Home';
import Sidebar from '../../components/sidebar/Sidebar';
import Pokemons from '../pokemons/Pokemons';
import Regions from '../regions/Regions';

interface MainContentProps { };

const MainContent: FunctionComponent<MainContentProps> = () => {

    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="ml-auto mt-3 col-9">
                    <Switch>
                        <Route path="/home/regions" component={Regions} />
                        <Route path="/home/pokemons" component={Pokemons} />
                        <Route path="/home" component={Home} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default MainContent;
