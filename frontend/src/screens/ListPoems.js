import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableNativeFeedback,
  Vibration,
  ActivityIndicator
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Poem from './Poem';
import axios from 'axios';

const ListPoems = ({route, navigation}) => {
  const DURATION = 100;
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { state } = props.navigation;
  const {theme} = route.params;
  const {url} = route.params;
  // props.name = "Study";

  const fetchPoems = async () => {
    // var name = JSON.stringify(theme);
    var name = theme;
    name.toString();
    console.log(name);
    const newUrl = 'http://192.168.0.103:8000/api/b/' + name;
    const result = await axios
      .get(newUrl)
      .then(result => setPoems(result.data));
    setLoading(false);
    // setPoems(result.poems);
    console.log('DATA DATA');
    console.log(poems);
    console.log('END GAME');
    console.log(newUrl);
  };

  useEffect(() => {
    fetchPoems(poems);
  }, []);

  if (loading === true) {
    return(
      <ImageBackground source={{uri: 'https://www.fonewalls.com/wp-content/uploads/Columbia-Blue-Gradient-Wallpaper.jpg'}}
        resizeMode={'cover'}
        style={{
            // flex: 1,
            zIndex: 0,
            position: 'absolute',
            width: wp(100),
            height: hp(100),
        }}>
          <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: null,
      }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
        </ImageBackground>
    )
  } else {
    return (
      <>
        <View
          style={{
            width: wp(17),
            height: wp(17),
            backgroundColor: 'black',
            position: 'absolute',
            zIndex: 100,
            borderRadius: 100,
            marginLeft: wp(75),
            marginTop: hp(85),
            elevation: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('ListCategories2');
              Vibration.vibrate(DURATION);
            }}>
            <Ionicons name="md-arrow-round-back" size={wp(10)} color="white" />
          </TouchableNativeFeedback>
        </View>
  
        {/* Top Desk */}
        <ImageBackground
          source={{uri: url.toString()}}
          style={{
            width: wp(100),
            height: hp(20),
            backgroundColor: 'skyblue',
            padding: wp(5),
            paddingTop: hp(5),
            borderBottomLeftRadius: hp(2),
            borderBottomRightRadius: hp(2),
            //   zIndex: -1,
            //   position: 'absolute',
          }}>
          <Text
            style={{
              //   backgroundColor: 'yellow',
              fontFamily: 'circular-black',
              fontSize: hp(5),
              color: 'white',
            }}>
            {theme.toString()}
          </Text>
          <Text
            style={{
              //   backgroundColor: 'yellow',
              fontFamily: 'circular-black',
              fontSize: hp(2),
              color: 'white',
            }}>
            20 posts
          </Text>
        </ImageBackground>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
          }}>
          {poems.map(poem => (
            <Poem text={poem.content} />
          ))}
  
          <View
            style={{
              width: wp(100),
              height: hp(30),
            }}></View>
        </ScrollView>
      </>
    );
    
  }

  
};

export default ListPoems;
