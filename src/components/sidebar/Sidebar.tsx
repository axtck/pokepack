import React, { FunctionComponent } from 'react';

interface SidebarProps { };

const Sidebar: FunctionComponent<SidebarProps> = () => {

    // labels and routes
    const routes = [
        {
            label: "Pokémons",
            route: "/home/pokemons",
        },
        {
            label: "Regions",
            route: "/home/regions",
        },
    ];


    /**************
     * Render
     **************/
    const sideBarLis = routes.map((r, i) => {
        return <a className="list-group-item" key={i} href={r.route}>{r.label}</a>
    });

    return (
        <ul className="list-group list-group-flush">
            {sideBarLis}
        </ul>
    )
}

export default Sidebar;
