import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Pressable, Modal } from "react-native";

// You can import supported modules from npm
//import { Card } from "react-native-paper";

// or any files within the Snack
//import AssetExample from './components/AssetExample';
const app = () => {
  const [modalVisible, setModalvisible] = useState(false);
  console.log(modalVisible);

  const nuevaCita = () => {
    console.log("Presionaste el boton");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Adimistrador de Citas<Text style={styles.tituloBold}>Veterinaria </Text>
      </Text>
      <Pressable
        style={styles.btnnuevacita}
        onPress={() => setModalvisible(true)}
      >
        <Text style={styles.btntexturasnuevascitas}>Nueva Cita</Text>
      </Pressable>
      <Formulario modalVisible />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f6",
    flex: 1,
    padding: 10,
  },
  titulo: {
    magin: 24,
    fontSize: 30,
    textTransform: "uppercase",
    color: "#374151",
    textAlign: "center",
  },
  tituloBold: {
    fontWeight: 900,
    color: "#6d28D9",
  },
  btnnuevacita: {
    backgroundColor: "#6D28D9",
    padding: 15,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  btntexturasnuevascitas: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: 900,
    textTransform: "uppercase",
  },
});
export default App;
