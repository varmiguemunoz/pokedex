import { POKEMON_TYPE_COLORS } from "../pokemonColors/index";

export const getcolorByPokemonType = (type) =>
  POKEMON_TYPE_COLORS[type.toLowerCase()];
