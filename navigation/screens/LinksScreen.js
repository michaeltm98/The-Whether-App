import React from 'react';
import { Slider } from 'react-native-elements'

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import styles from './HomeScreenstyle.js';

import CommonDataManager from './ApiCalls';



import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Preferences',
  };

constructor(){
  super()

  var commonData = CommonDataManager.getInstance();

this.state = {
  value1: 0,
  value2: 0, 
  value3: 0
}


        setInterval(() => {
      this.setState({
      });
    }, 1000);


}




  render() {
    return (
      // <ScrollView style={styles.container}>
      //   { Go ahead and delete ExpoLinksView and replace it with your
      //      * content, we just wanted to provide you with some helpful links }
      //   <ExpoLinksView />
      // </ScrollView>





<View style={styles.container}>


<View style={styles.container}>

  <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', marginTop: 20 }}>
    <Text>Pants below / Shorts above: {(this.state.value1 * 100) | 0}°</Text>
    <Slider
      value={this.state.value1}
      onValueChange={(value) => {

        this.setState({value1: value}); CommonDataManager.getInstance().setLowerBody((value * 100))}

        } />
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
       <Text style={styles.alignTextLeft}>Cold</Text> 
          <Text style={styles.alignTextRight}>Hot</Text>
      </View>
  </View>
  </View>

  <View style={styles.container}>
  <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
      <Text>Jacket below / Shirt above: {(this.state.value2 * 100) | 0}°</Text>
    <Slider
      value={this.state.value2}
      onValueChange={(value) =>{

        this.setState({value2: value}); CommonDataManager.getInstance().setUpperBody(value * 100)} 
      } />
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
       <Text style={styles.alignTextLeft}>Cold</Text> 
          <Text style={styles.alignTextRight}>Hot</Text>
      </View>
        </View>
  </View>

  <View style={styles.container}>
  <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
      <Text>Boots below / Sneakers above: {(this.state.value3 * 100) | 0}°</Text>
    <Slider
      value={this.state.value3}
      onValueChange={(value) => {
        this.setState({value3: value}); CommonDataManager.getInstance().setShoes(value * 100)}
      } />
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
       <Text style={styles.alignTextLeft}>Cold</Text> 
          <Text style={styles.alignTextRight}>Hot</Text>
      </View>

  </View>
  </View>

</View>


    // <Text>latitude: {CommonDataManager.getInstance().getLatitude()}</Text>
    // <Text>longitude: {CommonDataManager.getInstance().getLongitude()}</Text>
    // <Text>locationKey: {CommonDataManager.getInstance().getLocationKey()}</Text>
    // <Text>Temp: {CommonDataManager.getInstance().getCurrentTemp()}</Text>
    // <Text>DayTime: {CommonDataManager.getInstance().getIsDayTime()}</Text>
    // <Text>Wind: {CommonDataManager.getInstance().getCurrentWindSpeed()}</Text>
    // <Text>Max Temp Today: {CommonDataManager.getInstance().getMaxTempToday()}</Text>
    // <Text>Min Temp Today: {CommonDataManager.getInstance().getMinTempToday()}</Text>
    // <Text>Prec Prob Today: {CommonDataManager.getInstance().getPrecipitationProbability()}</Text>
    // <Text>icon Today: {CommonDataManager.getInstance().getIconToday()}</Text>
    // <Text>icon phrase Today: {CommonDataManager.getInstance().getIconPhraseToday()}</Text>
    //       <View style={{flex: 1, flexDirection: 'row', marginTop: 75}} contentContainerStyle={styles.contentContainer}>
    //         <Image
    //           source={
    //               require('../assets/images/1-weather-image.png')
    //           }
    //           style={styles.welcomeImage}
    //         />
    //                     <Image
    //           source={
    //             __DEV__
    //               ? require('../assets/images/robot-dev.png')
    //               : require('../assets/images/robot-prod.png')
    //           }
    //           style={styles.welcomeImage}
    //         />
    //                     <Image
    //           source={
    //             __DEV__
    //               ? require('../assets/images/robot-dev.png')
    //               : require('../assets/images/robot-prod.png')
    //           }
    //           style={styles.welcomeImage}
    //         />
    //                     <Image
    //           source={
    //             __DEV__
    //               ? require('../assets/images/robot-dev.png')
    //               : require('../assets/images/robot-prod.png')
    //           }
    //           style={styles.welcomeImage}
    //         />
    //                     <Image
    //           source={
    //             __DEV__
    //               ? require('../assets/images/robot-dev.png')
    //               : require('../assets/images/robot-prod.png')
    //           }
    //           style={styles.welcomeImage}
    //         />
    //                                 <Image
    //           source={
    //             __DEV__
    //               ? require('../assets/images/robot-dev.png')
    //               : require('../assets/images/robot-prod.png')
    //           }
    //           style={styles.welcomeImage}
    //         />
    //       </View>


    //         <Image
    //           source={
    //               require('../assets/images/1-weather-image.png')
    //           }
    //           style={styles.welcomeImage}
    //         />

    );
  }
}

/// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
// });
