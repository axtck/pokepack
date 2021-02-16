import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../components/home/Home';

interface MainContentProps { };

const MainContent: FunctionComponent<MainContentProps> = () => {

    return (
        <div className="container">
            <div className="ml-3">
                <Switch>
                    <Route path="/home" component={Home} />
                </Switch>
            </div>
        </div>
    )
}

export default MainContent;
