import Ionicons from '@expo/vector-icons/Ionicons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import Weather from '../../components/Weather';

interface ViewProps {
  className?: string;
}


export default function TabTwoScreen() {
  const [location, setLocation] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>(null);
  
  const fetchWeather = async () => {
    const API_KEY = '29d4774456e17009381ca1db6b799d94'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<AntDesign size={350} name="cloud" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Check your weather</ThemedText>
      </ThemedView>
      
      <ThemedView className="flex-1 items-center justify-center p-20">
      <ThemedText>Enter your location below</ThemedText>
      <TextInput
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
        className="border border-gray-300 rounded-md p-2 h-40 w-[80%] mb-20 text-white bg-white"
        style={styles.text}
      />
      <Button title="Get Weather" onPress={fetchWeather}  />
      <Weather weatherData={weatherData} />
    </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -100,
    left: -25,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    width: '100%',
    height: 40,
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: 20,
    fontWeight: 'semibold',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginVertical: 8,
  },
});
