import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [count, setCount] = useState<number>(0)

useEffect(()=>{
console.log("The count is : " + count)
return () => {
    console.log("clean up function called")
}

},[count])

  return (
    <View style={styles.container}>
      <Text>count : {count}</Text>
      <Button title='increase' onPress={() => {
        // setCount(count+1)
        // setCount(count+1)
        setCount((c) => c+1)
        setCount((c) => c+1)

        }}/>
      <Button title='decrease' onPress={() => setCount(count-1)}/>
    </View>
  )
}

export default UseEffect

const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}
})