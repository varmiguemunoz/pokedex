import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Pokedex from "../../screens/pokedex/index";
//Este Componente de [pokemonDetails] en nuestra navegacion, permite hacer un navegacion de cada pokemon renderizado en la lista
import PokemonDetails from "../../screens/PokemonDetails";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="PokemonDetails"
        component={PokemonDetails}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
