import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';

export default function unipampa() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={{
          latitude: -31.3063398,
          longitude: -54.0642515,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}>
          <Marker
            coordinate={{
              latitude:-31.3063398,
              longitude: -54.0642515,}}
            title={"unipampa"}
            description={"você está aqui"}
          ></Marker>
          
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});