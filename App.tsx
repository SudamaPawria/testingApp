import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import UseEffect from "./src/useEffect/UseEffect";
import { useState } from "react";

function App() {
const [showDemo, setShowDemo] = useState<boolean>(true)

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Button title="toggle" onPress={()=>setShowDemo(!showDemo)}/>
        {showDemo && <UseEffect/>}
        
      </View>
    </SafeAreaView>
  )
}
export default App
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})