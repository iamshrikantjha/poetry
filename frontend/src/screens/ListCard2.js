import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ListPoems from './ListPoems';

const ListCard2 = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      {/* Slot Category */}
      <TouchableOpacity
      onPress={()=> navigation.navigate('ListPoems',{
        theme: props.theme,
        url: props.url,
      })}
          style={{
            width: wp(100),
            height: hp(30),
            // backgroundColor: 'pink',
            // marginTop: hp(1),
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          {/* Image */}
          <View
            style={{
              width: wp(75),
              height: hp(25),
            //   backgroundColor: 'lightgreen',
              borderRadius: 15,
              overflow: 'hidden',
            //   borderWidth: wp(0.2),
            }}>
            <Image
              source={{
                uri:
                  props.url,
              }}
              style={{
                width: wp(75),
                height: hp(25),
                zIndex: 1,
              }}
            />
            <Text
              style={{
                fontFamily: 'circular-black',
                fontSize: hp(3.3),
                marginTop: hp(15),
                marginLeft: wp(3),
                color: 'white',
                zIndex: 3,
                position: 'absolute',
              }}>
             {props.theme}
            </Text>
            <Text
              style={{
                fontFamily: 'circular-medium',
                fontSize: hp(1.5),
                marginTop: hp(20),
                marginLeft: wp(3),
                color: 'white',
                zIndex: 3,
                position: 'absolute',
              }}>
              {props.text}
            </Text>
          </View>

          {/* SideCol */}
          <View
            style={{
              width: wp(10),
              height: hp(25),
            //   backgroundColor: 'yellow',
              justifyContent: 'space-evenly',
            }}>



            {/* Love Icon */}
            <View
              style={{
                // backgroundColor: 'green',
                alignItems: 'center',
              }}>
              <AntDesign name="heart" size={27} color="red" />
              <Text
                style={{
                  fontSize: hp(1.4),
                  fontFamily: 'circular-black',
                  color: 'black',
                }}>
                52k
              </Text>
            </View>

            {/* Comment Icon */}
            <View
              style={{
                // backgroundColor: 'green',
                alignItems: 'center',
              }}>
              <AntDesign name="book" size={27} color="black" />
              <Text
                style={{
                  fontSize: hp(1.4),
                  fontFamily: 'circular-black',
                  color: 'black',
                }}>
                13
              </Text>
            </View>

            {/* Forward Icon */}
            <View
              style={{
                // backgroundColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                  <View style={{
                      width: hp(4),
                      height: hp(4),
                      backgroundColor: 'black',
                      justifyContent: 'center',
                      alignItems: "center",
                      borderRadius: 100,
                  }}>
                    <FontAwesome name="arrow-right" size={hp(2)} color="white" />

                  </View>
              {/* <Text
                style={{
                  fontSize: hp(1.4),
                  fontFamily: 'circular-black',
                  color: 'black',
                }}>
                13
              </Text> */}
            </View>


          </View>
        </TouchableOpacity>
     
    </View>
  );
};

export default ListCard2;
