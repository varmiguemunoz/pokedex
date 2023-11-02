import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Favorites from "../../screens/favorites";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorites}
        options={{
          title: "Favoritos",
        }}
      />
    </Stack.Navigator>
  );
}
