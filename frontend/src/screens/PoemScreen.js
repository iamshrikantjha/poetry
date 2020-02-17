import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Clipboard,
  Share,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PoemScreen = ({ route}) => {
  const navigation = useNavigation();
  const { poemText } = route.params;

  let newText = poemText.toString();

  // Dummy Share
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: newText,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        // source={require('./../../assets/wallpaper.jpg')}
        source={{
          uri:
            'https://www.fonewalls.com/wp-content/uploads/Columbia-Blue-Gradient-Wallpaper.jpg',
        }}
        blurRadius={1}
        style={{
          flex: 1,
          width: wp(100),
          height: hp(100),
        }}>
        {/* TextCard */}
        <View
          style={{
            width: wp(80),
            height: null,
            backgroundColor: '#e6ffff',
            marginLeft: wp(10),
            marginTop: hp(10),
            borderRadius: 15,
            overflow: 'hidden',
            // borderWidth: wp(0.2),
            elevation: hp(5),
          }}>
          <View
            blurRadius={10}
            style={{
              width: wp(80),
              height: hp(65),
            }}>
            {/* Quotes */}
            <View
              style={{
                // backgroundColor: 'pink',
                paddingLeft: wp(10),
                paddingTop: hp(3),
              }}>
              <FontAwesome name="quote-left" size={20} color="black" />
            </View>
                      <ScrollView>
                      <Text
                      style={{
                        padding: wp(5),
                        paddingLeft: wp(10),
                        fontFamily: 'circular-italic',
                        fontSize: hp(2.5),
                        // backgroundColor: 'pink',
                      }}>
                      {newText}
                    </Text>
                      </ScrollView>
            
            {/* Quotes */}
            <View
              style={{
                alignItems: 'flex-end',
                marginBottom: hp(3),
                // backgroundColor: 'pink',
                paddingRight: wp(10),
              }}>
              <FontAwesome name="quote-right" size={20} color="black" />
            </View>
          </View>
        </View>

        {/* Two Buttons */}
        <View
          style={{
            // backgroundColor: 'pink',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: hp(3),
          }}>
          {/* Share */}
          <TouchableOpacity
            onPress={() => onShare()}
            style={{
              backgroundColor: 'white',
              width: hp(7),
              height: hp(7),
              borderRadius: 100,
              elevation: 50,
              borderWidth: wp(0.5),
              justifyContent: 'center',
              // alignItems: "center",
              paddingLeft: wp(2.5),
              elevation: hp(5),
            }}>
            <AntDesign name="sharealt" size={30} color="black" />
          </TouchableOpacity>

          {/* Copy */}
          <TouchableOpacity
            onPress={() => {Clipboard.setString(poemText);ToastAndroid.show('Text Copied !', ToastAndroid.TOP, ToastAndroid.SHORT,);}}
            style={{
              backgroundColor: 'white',
              width: hp(7),
              height: hp(7),
              borderRadius: 100,
              elevation: 200,
              borderWidth: wp(0.5),
              justifyContent: 'center',
              // alignItems: "center",
              paddingLeft: wp(2.5),
              elevation: hp(5),
            }}>
            <AntDesign name="copy1" size={30} color="black" />
          </TouchableOpacity>

          {/* Back */}
          <TouchableOpacity
            onPress={() => navigation.navigate('ListPoems')}
            style={{
              backgroundColor: 'white',
              width: hp(7),
              height: hp(7),
              borderRadius: 100,
              elevation: 200,
              borderWidth: wp(0.5),
              justifyContent: 'center',
              // alignItems: "center",
              paddingLeft: wp(2.5),
              elevation: hp(5),
            }}>
            <AntDesign name="stepbackward" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PoemScreen;
