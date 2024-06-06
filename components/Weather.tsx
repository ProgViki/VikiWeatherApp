import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WeatherProps {
  weatherData: {
    name: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
    }[];
  } | null;

}


const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
  if (!weatherData) {
    return <Text style={styles.text}>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Location: {weatherData.name}</Text>
      <Text style={styles.text}>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</Text>
      <Text style={styles.text}>Condition: {weatherData.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default Weather;