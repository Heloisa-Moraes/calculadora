import { SafeAreaView, StyleSheet, View } from "react-native";

import Botao from "./src/components/Botao";

export default props => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.botao}>
        <Botao label="AC" triplo/>
        <Botao label="/" dir/>
        <Botao label="7" />
        <Botao label="8" />
        <Botao label="9" />
        <Botao label="*" dir/>
        <Botao label="4" />
        <Botao label="5" />
        <Botao label="6" />
        <Botao label="-" dir/>
        <Botao label="1" />
        <Botao label="2" />
        <Botao label="3" />
        <Botao label="+" dir/>
        <Botao label="0" duplo/>
        <Botao label="." />
        <Botao label="=" dir/>
        

      </View>
    </SafeAreaView>
  )
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF69B4",
    justifyContent: "flex-end"

  },
  botao: {
    flexDirection: "row",
    flexWrap: "wrap"
  }


})