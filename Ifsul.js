import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';

export default function ifsul() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={{
          latitude: -31.3302738,
          longitude: -54.0719644,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}>
          <Marker
            coordinate={{
              latitude:-31.332026,
              longitude:-54.071780, }}
            title={"ifsul"}
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
