import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";

import { GetPokemons } from "../../api/getPokemons";
import { GetPokemonsDetails } from "../../api/getPokemonsDetails";
import PokemonList from "../../components/home/pokemonList/index";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextPokemons, setNextPokemos] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await GetPokemons(nextPokemons);
      setNextPokemos(response.next);

      const pokemonsArray = [];
      for await (const pokemonDetail of response.results) {
        const fecthDetails = await GetPokemonsDetails(pokemonDetail.url);

        pokemonsArray.push({
          id: fecthDetails.id,
          name: fecthDetails.name,
          type: fecthDetails.types[0].type.name,
          order: fecthDetails.order,
          image: fecthDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (err) {
      throw err;
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isnextPokemons={nextPokemons}
      />
    </SafeAreaView>
  );
}
