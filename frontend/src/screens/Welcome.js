import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Welcome = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('ListCategories2');
          console.log('Pressed');
        }}>
        <ImageBackground
          source={require('./../../assets/poetry.png')}
          style={{
            // flex: 1,
            width: wp(100),
            height: hp(100),
            // justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Stuff */}
          <View>
            <View
              style={{
                width: wp(60),
                height: wp(60),
                borderRadius: 200,
                overflow: 'hidden',
                marginTop: hp(17),
                backgroundColor: 'red',
              }}>
              <Image
                source={require('./../../assets/shayar.jpg')}
                style={{
                  width: wp(60),
                  height: wp(60),
                }}
              />
            </View>

            <View
              style={{
                backgroundColor: 'black',
                width: wp(60),
                height: hp(8),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                marginTop: hp(6),
              }}>
              <Text
                style={{
                  fontFamily: 'circular-bold',
                  color: 'white',
                  fontSize: hp(3.7),
                }}>
                हिंदी शायरी
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Welcome;
