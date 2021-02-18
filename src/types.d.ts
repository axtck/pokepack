export type NameAndUrl = {
    name: string;
    url: string;
}

export type PokemonType = {
    entry_number: number;
    pokemon_species: NameAndUrl;
}

export type SpritesType = {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    back_female?: string;
    back_shiny_female?: string;
    front_female?: string;
    front_shiny_female?: string;
}

export type PokemonDataType = {
    name: string;
    species: NameAndUrl;
    sprites: SpritesType;
    weight: number;
}