import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  StatusBar,
  TextInput,
} from "react-native";

const jogos = [
  {
    id: "1",
    nome: "Minecraft",
    genero: "Aventura / Sobrevivência",
    nota: "9.5",
    imagem:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800",
  },
  {
    id: "2",
    nome: "The Legend of Zelda",
    genero: "Aventura / RPG",
    nota: "9.8",
    imagem:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
  },
  {
    id: "3",
    nome: "Cyberpunk 2077",
    genero: "RPG / Ação",
    nota: "9.0",
    imagem:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
  },
  {
    id: "4",
    nome: "Grand Theft Auto V",
    genero: "Ação / Mundo Aberto",
    nota: "9.6",
    imagem:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  },
  {
    id: "5",
    nome: "God of War",
    genero: "Ação / Aventura",
    nota: "9.7",
    imagem:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800",
  },
  {
    id: "6",
    nome: "Fortnite",
    genero: "Battle Royale / Ação",
    nota: "8.8",
    imagem:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800",
  },
  {
    id: "7",
    nome: "Red Dead Redemption 2",
    genero: "Ação / Aventura",
    nota: "9.9",
    imagem:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800",
  },
  {
    id: "8",
    nome: "EA Sports FC",
    genero: "Esportes / Futebol",
    nota: "9.1",
    imagem:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
  },
];

export default function App() {
  const [pesquisa, setPesquisa] = useState("");

  const jogosFiltrados = jogos.filter((jogo) =>
    jogo.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  const renderJogo = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image
          source={{ uri: item.imagem }}
          style={styles.imagem}
        />

        <View style={styles.informacoes}>
          <Text style={styles.nome}>{item.nome}</Text>

          <Text style={styles.genero}>
            🎯 {item.genero}
          </Text>

          <View style={styles.rodapeCard}>
            <Text style={styles.nota}>
              ⭐ {item.nota}
            </Text>

            <Text style={styles.avaliacao}>
              Avaliação
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.icone}>🎮</Text>

        <View>
          <Text style={styles.titulo}>
            GameList
          </Text>

          <Text style={styles.subtitulo}>
            Seu catálogo de jogos
          </Text>
        </View>
      </View>

      {/* PESQUISA */}
      <View style={styles.areaPesquisa}>
        <TextInput
          style={styles.input}
          placeholder="🔎 Pesquisar jogo..."
          placeholderTextColor="#888"
          value={pesquisa}
          onChangeText={setPesquisa}
        />
      </View>

      {/* CONTADOR */}
      <View style={styles.areaTitulo}>
        <Text style={styles.tituloLista}>
          Jogos disponíveis
        </Text>

        <Text style={styles.contador}>
          {jogosFiltrados.length} jogos
        </Text>
      </View>

      {/* FLATLIST */}
      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderJogo}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <Text style={styles.semResultado}>
            Nenhum jogo encontrado 😕
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1020",
  },

  header: {
    backgroundColor: "#151c35",
    paddingTop: 45,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#28345c",
  },

  icone: {
    fontSize: 40,
    marginRight: 15,
  },

  titulo: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitulo: {
    color: "#8e9abd",
    fontSize: 14,
    marginTop: 3,
  },

  areaPesquisa: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  input: {
    backgroundColor: "#181f38",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 13,
    color: "#ffffff",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#2c3962",
  },

  areaTitulo: {
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tituloLista: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },

  contador: {
    color: "#7c8cff",
    fontSize: 14,
    fontWeight: "bold",
  },

  lista: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  card: {
    backgroundColor: "#171e35",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#28345c",
  },

  imagem: {
    width: "100%",
    height: 180,
  },

  informacoes: {
    padding: 15,
  },

  nome: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  genero: {
    color: "#aab4d0",
    fontSize: 14,
    marginBottom: 12,
  },

  rodapeCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  nota: {
    color: "#ffd54a",
    fontSize: 16,
    fontWeight: "bold",
  },

  avaliacao: {
    color: "#7c8cff",
    fontSize: 13,
  },

  semResultado: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },
});