import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Textarea, Form, Item, Input, H1, H3, Card, CardItem  } from 'native-base'

import styles from './HomeScreenstyle.js';
import CommonDataManager from './ApiCalls';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    // title: 'app.json',
    title: 'Settings'
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    // return <ExpoConfigView />;
    return(




    		<Container style={styles.container}>
			<FormLabel>Name</FormLabel>
			<FormInput onChangeText={(input) => {
				CommonDataManager.getInstance().setUserName(input)}
			}/>
			</Container>
    	);
  }
}
