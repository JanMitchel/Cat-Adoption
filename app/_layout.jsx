import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts} from 'expo-font'//add this import
import { useEffect } from 'react'//add this import
import { SplashScreen } from 'expo-router'//add this import

SplashScreen.preventAutoHideAsync();

export default function App() {

    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
         "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
       
      });
      
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
