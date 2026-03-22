import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}
export default function PokemonCard(props: PokemonCardProps) {
  const id = 1;
  const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/pokemon/${id}.png`;
  return (
    <Pressable onPress={() => router.push(`/pokemon/${props.name}`)}>
      <Image
        source={{ uri: pokemonImageURL }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
    </Pressable>
  );
}
