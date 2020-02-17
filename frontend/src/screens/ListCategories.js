import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, ImageBackground} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ListCard from './ListCard';

const ListCategories = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
        
      <ImageBackground 
      source={require('./../../assets/wallpaper.jpg')} 
      // source={{uri: 'https://i.pinimg.com/564x/7e/35/b1/7e35b18c8a0af7ed5c5aae35e75b02f5.jpg'}} 
      style={{
        flex: 1,
      }}>
      {/* Top Desk */}
      <View
        style={{
          width: wp(100),
          height: hp(25),
          //   backgroundColor: 'pink',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        {/* Demo Text View */}
        <View
          style={{
            // backgroundColor: 'yellow',
            width: wp(70),
            height: hp(20),
            padding: wp(3),
          }}>
          <Text
            style={{
              fontFamily: 'circular-bold',
              fontSize: hp(2.8),
              color: '#694fad',
            }}>
            Hi,{'\n'}
            {'\n'}
            Your poems collection is here
            {/* We have all kinds of Poetries you want ! */}
          </Text>
        </View>
        {/* Demo Image View */}
        <View
          style={{
            // backgroundColor: 'yellow',
            width: wp(20),
            height: wp(20),
          }}>
          <Image
            source={{uri:'https://previews.123rf.com/images/kongvector/kongvector1709/kongvector170903856/86849459-tongue-out-sponge-cartoon-character-funny.jpg'}}
            resizeMode={'contain'}  
            style={{
              flex: 1,
              width: null,
              height: null,
              borderRadius: 100,
            }}
          />
        </View>
      </View>

      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={{
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <ListCard color={'black'} text={'Love'} url={'https://images.pexels.com/photos/556667/pexels-photo-556667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
        <ListCard color={'red'} text={'Motivation'} url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmC2_0v_ATqHXr_FeCrzbu0Rh92Nv3nk1dQeOc-msFJOaSN_cU&s'} />
        <ListCard color={'blue'} text={'School'} />
        <ListCard color={'purple'} text={'Admin'} />
        <ListCard color={'green'} text={'Comedy'} />
        <ListCard color={'teal'} text={'Life'} />
        <ListCard color={'black'} text={'Love'} />
        <ListCard color={'black'} text={'Motivation'} />
        <ListCard color={'red'} text={'Love'} />
        <ListCard color={'blue'} text={'School'} />
        <ListCard color={'purple'} text={'Admin'} />
        <ListCard color={'green'} text={'Comedy'} />
        <ListCard color={'teal'} text={'Life'} />
        <ListCard color={'black'} text={'Sad'} />
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ListCategories;
