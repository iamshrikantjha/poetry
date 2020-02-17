import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const Poem = (props) => {
  const navigation = useNavigation();
  return (
    <>
    <TouchableOpacity
    onPress={()=>navigation.navigate('PoemScreen',{
      poemText: props.text,
    })}>

    
      <ImageBackground
      source={require('./../../assets/wallpaper4.jpeg')}
        style={{
          width: wp(90),
          height: null,
          // backgroundColor: 'pink',
          marginTop: hp(2),
        //   marginBottom: hp(1),
          borderRadius: 15,
          borderColor: 'grey',
          borderWidth: wp(0.5),
          padding: wp(7),
          overflow: 'hidden',
        }}>
            <View style={{
                    // backgroundColor: 'yellow',
                }}>
                <FontAwesome name="quote-left" size={25} color="black"/>
                </View>
            <Text style={{
                fontFamily: 'circular-italic',
                fontSize: hp(2),
            }}>
            {' '}{' '}{' '}{' '}{' '}{' '}
            {props.text}
                
            </Text>
            <View style={{
                    // backgroundColor: 'yellow',
                    alignItems: 'flex-end',
                }}>
                <FontAwesome name="quote-right" size={25} color="black"/>
                </View>
        </ImageBackground>
        </TouchableOpacity>
    </>
  );
};

export default Poem;
