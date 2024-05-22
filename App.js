import { SafeAreaView, StyleSheet } from "react-native";

import Botao from "./src/components/Botao";

export default props => {
    return (
                <SafeAreaView style={estilos.container}>
          <Botao/>
        </SafeAreaView>
    )
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DB7093",
    justifyContent: "center",
    alignItems:"center"

  }
})