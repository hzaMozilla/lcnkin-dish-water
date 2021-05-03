import React, { useEffect, useState } from 'react';
import { View, Map } from '@tarojs/components';
import mapType from './type';

export function MapComponents<T, K>(props: mapType<T, K>) {
  const [currentLongitude, setCurrentLongitude] = useState([]);
  useEffect(() => { console.log(currentLongitude) }, [currentLongitude]);
  return (
    <View>
      <Map
        id="map"
        style={{ width: '100%', height: '350px', backgroundColor: '#000000' }}
        longitude={props.longitude}
        latitude={props.latitude}
        onClick={(value: any) => { setCurrentLongitude(value) }}
        show-location
      />
    </View>
  )
};
interface test<T> {
  longitude: T;
  latitude: Number;
  scale: Number;
  markers: Number[];
}
export default class MapComponents1<T extends test> extends React.Component<test<T>> {
  constructor(props) {
    super(props)
  }
  setCurrentLongitude(value) {
    console.log(value);
  }
  render() {
    return (
      <View>
        <Map
          id="map"
          style={{ width: '100%', height: '350px', backgroundColor: '#000000' }}
          longitude={this.props.longitude}
          latitude={this.props.latitude}
          onClick={(value) => { this.setCurrentLongitude(value) }}
          show-location
        />
      </View >
    )
  }
};
