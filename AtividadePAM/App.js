import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [curso, setCurso] = useState("");
  const [resultado, setResultado] = useState("");

  function cadastrarAluno() {

    if (nome === "" || idade === "" || curso === "") {
      setResultado("Preencha todos os campos!");
      return;
    }

    setResultado(
      `Aluno cadastrado com sucesso!\n\nNome: ${nome}\nIdade: ${idade}\nCurso: ${curso}`
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Cadastro de Aluno
      </Text>

      <Text style={styles.subtitulo}>
        Preencha os dados abaixo
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do aluno"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <TextInput
        style={styles.input}
        placeholder="Curso"
        value={curso}
        onChangeText={setCurso}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarAluno}
      >
        <Text style={styles.textoBotao}>
          CADASTRAR
        </Text>
      </TouchableOpacity>

      {resultado !== "" && (
        <View style={styles.resultado}>
          <Text style={styles.textoResultado}>
            {resultado}
          </Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#101828",
    justifyContent: "center",
    padding: 25,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitulo: {
    color: "#98A2B3",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#7F56D9",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  resultado: {
    backgroundColor: "#1D2939",
    padding: 20,
    borderRadius: 10,
    marginTop: 25,
  },

  textoResultado: {
    color: "#FFFFFF",
    fontSize: 17,
    textAlign: "center",
    lineHeight: 28,
  },

});