import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Textarea, Form, Item, Input, H1, H3, Card, CardItem  } from 'native-base'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

var iconImage1 = require('../assets/images/1-weather-image.png');


// import { Button } from 'react-native-elements';

import { WebBrowser } from 'expo';

import UserItem from './Item.js'; 

import { MonoText } from '../components/StyledText';

import styles from './HomeScreenstyle.js';

import CommonDataManager from './ApiCalls';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    title: 'Today'
  };


constructor(){
  super()

  CommonDataManager.getInstance().addToItemsArray(new UserItem("Coat"));
  CommonDataManager.getInstance().addToItemsArray(new UserItem("Hat"));
  CommonDataManager.getInstance().addToItemsArray(new UserItem("Snow Boots"));

  var commonData = CommonDataManager.getInstance();


    this.state = {
      latitud: null,
      longitude: null,
      locationKey: null,
      currentTemperature: null,
      maxTemperature: null,
      error: null,
    };


        setInterval(() => {
      this.setState({});
    }, 500);


}

 componentDidMount() {
  CommonDataManager.getInstance().getGeolocation();
    this.setState();

  }




  render() {
    // console.log("This is a log in render()");
    return (






          // <Button
          //   onPress={() => {
          //     Alert.alert('You tapped the button!');
          //   }}
          //   title="Press Me"
          // />

        <View style={styles.mainContainer}>


      <Container style={styles.mainContainer}>
        <Header style={{backgroundColor: '#42b0f4'}}>
          <Body>
            <H3 style={styles.generalText}>Hi {CommonDataManager.getInstance().getUserName()}, these are your suggested items today:</H3>
          </Body>
        </Header>
          <Card style={{backgroundColor: '#42b0f4', flex: 1, alignSelf: 'stretch'}}>
            <CardItem style={{backgroundColor: '#42b0f4', flex: 1, alignSelf: 'stretch'}}>
              <Body style={{backgroundColor: '#42b0f4', flex: 1}}>
                <Text style={styles.suggestionsText}>
                  {CommonDataManager.getInstance().getItemsNeededString()}
                </Text>
              </Body>
            </CardItem>
          </Card>
      </Container>
      <Container style={styles.leftContainer}>
          <Image
              source={
                  CommonDataManager.getInstance().getIconImage()
              }
              style={styles.welcomeImage}
            />

            <H1 style={styles.generalText} >{CommonDataManager.getInstance().getIconPhraseToday()} {"\n"} {CommonDataManager.getInstance().getCurrentTemp()}°</H1>

          </Container>
          <H3 style={styles.specialText} >      High   Low {"\n"}      {CommonDataManager.getInstance().getMaxTempToday()}°      {CommonDataManager.getInstance().getMinTempToday()}°</H3>

          </View>




      // <View style={styles.container}>
      //   <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      //     <View style={styles.welcomeContainer}>
      //       <Image
      //         source={
      //           __DEV__
      //             ? require('../assets/images/robot-dev.png')
      //             : require('../assets/images/robot-prod.png')
      //         }
      //         style={styles.welcomeImage}
      //       />
      //     </View>

      //     <View style={styles.getStartedContainer}>
      //       {this._maybeRenderDevelopmentModeWarning()}

      //       <Text style={styles.getStartedText}>Get started by opening</Text>

      //       <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
      //         <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
      //       </View>

      //       <Text style={styles.getStartedText}>
      //         Change this text and your app will automatically reload.
      //       </Text>


      //     </View>

      //                 <Button
      //       onPress={() => {
      //         Alert.alert('You tapped the button!');
      //       }}
      //       title="Press Me"
      //     />

      //     <View style={styles.helpContainer}>
      //       <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
      //         <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
      //       </TouchableOpacity>
      //     </View>
      //   </ScrollView>

      //   <View style={styles.tabBarInfoContainer}>
      //     <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

      //     <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
      //       <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
      //     </View>
      //   </View>
      // </View>




    );
  }









  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development!!!!!!!!!
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed !!!!!!!!!!!!!!!!!!!!!.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

