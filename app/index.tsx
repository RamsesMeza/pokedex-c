import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";
import { Alert, ScrollView, TextInput } from "react-native";

interface Pokemon {
  name: string;
  url: string;
}

interface Data {
  results: Pokemon[];
}
export default function Index() {
  const [results, setResults] = useState<Pokemon[]>([]);

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const response = await fetch(URL, {
        method: "GET",
      });
      const data: Data = await response.json();
      setResults(data.results);
    } catch (error) {
      Alert.alert("Ocurrió un error en móvil:" + error);
      window.alert("Ocurrió un error en la web:" + error);
    }
  };

  const filterPokemon = (text: string) => {
    const arrayFiltered = results.filter((item) => item.name.includes(text));
    setResults(arrayFiltered);
  };

  return (
    <ScrollView>
      <TextInput onChangeText={filterPokemon}></TextInput>
      {results.map((item) => {
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
