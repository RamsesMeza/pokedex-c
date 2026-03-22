import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, TextInput } from "react-native";

interface Pokemon {
  name: string;
  url: string;
}

interface Data {
  results: Pokemon[];
}
export default function Index() {
  //Escribe y como funciona useState
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");

  //Escribe y como funciona useEffect
  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  //Completa el código para realizar un request a una URL dada
  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
      const response = await fetch(URL, {
        method: "GET",
      });
      const data: Data = await response.json();
      setAllPokemons(data.results);
    } catch (error) {
      Alert.alert("Ocurrió un error en móvil:" + error);
      window.alert("Ocurrió un error en la web:" + error);
    }
  };

  //Para qué funciona filter
  const fitterPokemons = () => {
    const text = search.trim().toLowerCase();
    if (!text) return allPokemons;
    return allPokemons.filter((item) => item.name.toLowerCase().includes(text));
  };

  const filteredPokemons: Pokemon[] = fitterPokemons();

  return (
    <ScrollView>
      <TextInput
        placeholder="Buscar Pokémon..."
        placeholderTextColor="#888"
        onChangeText={setSearch}
        style={styles.searchInput}
      />
      {/* Como funciona .map() */}
      {filteredPokemons.map((item) => {
        return (
          <PokemonCard
            key={item.name}
            name={item.name}
            url={item.url}
          ></PokemonCard>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#222",
    marginHorizontal: 16,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
});
