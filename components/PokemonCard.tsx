import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

//Cual es el propósito de la interface en este código
export default function PokemonCard(props: PokemonCardProps) {
  //Como funciona split, filter y at
  const id = props.url.split("/").filter(Boolean).at(-1);
  const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

  //Qué es el router y para que sirve
  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/pokemon/${props.name}`)}
    >
      <Text style={styles.id}>#{id}</Text>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: pokemonImageURL }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.name}>{props.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  imageContainer: {
    width: "100%",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 12,
  },
  image: {
    width: 140,
    height: 140,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "capitalize",
    color: "#222",
  },
  id: {
    marginTop: 4,
    fontSize: 14,
    color: "#666",
  },
});
