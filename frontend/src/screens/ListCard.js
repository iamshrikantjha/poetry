import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ListPoems from './ListPoems';

const ListCard = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ListPoems')}
        style={{
          backgroundColor: 'white',
          borderRadius: 15,
          width: wp(90),
          height: hp(15),
          margin: wp(3),
          justifyContent: 'center',
        //   alignItems: 'center',
          elevation: 10,
          borderWidth: wp(0.5),
          borderColor: 'purple',
          zIndex: 100,
        }}>
            {/* Image View */}
            <View style={{
                width: hp(13),
                // padding:hp(1),
                height: hp(13),
                // backgroundColor: 'red',
                marginLeft: wp(2),
                borderRadius: 11,
                overflow: 'hidden',
            }}> 
                <Image source={{uri: props.url}} 
                style={{
                    flex: 1,
                    width: hp(13),
                    height: hp(13),
                }}/>
            </View>
            {/* Text Views */}
            <View>
                <Text>
                    Category
                </Text>
            </View>
        {/* <Text
          style={{
            color: 'white',
            fontFamily: 'circular-black',
            fontSize: hp(2.5),
          }}>
          {props.text}
        </Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default ListCard;
