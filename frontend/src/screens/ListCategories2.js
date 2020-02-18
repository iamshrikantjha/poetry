import React, { useState, useEffect } from 'react';
import {View, Text, ScrollView, ImageBackground, ActivityIndicator} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import axios from 'axios';

import ListCard2 from './ListCard2';

const ListCategories2 = () => {
  
  // Testing
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState('');
  const [theme, setTheme] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get('http://192.168.0.103:8000/api/a').then((result)=>setData(result.data));
    setLoading(false);
    // setPoems(result.poems);
    console.log('DATA DATA');
    console.log(data);
    console.log('END GAME');
  };

  useEffect(() => {
    fetchData(data);
  }, []);

  // Testing

    if (loading === true) {
      return(
        // <ImageBackground source={{uri: 'https://www.fonewalls.com/wp-content/uploads/Columbia-Blue-Gradient-Wallpaper.jpg'}}
        <ImageBackground source={require('./../../assets/cb.jpg')}
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
    }
    else{
      return(<View>
        {/* Main List */}
          {/* <ImageBackground source={{uri: 'https://www.fonewalls.com/wp-content/uploads/Columbia-Blue-Gradient-Wallpaper.jpg'}} */}
          <ImageBackground source={require('./../../assets/cb.jpg')}
          resizeMode={'cover'}
          style={{
              // flex: 1,
              zIndex: 0,
              position: 'absolute',
              width: wp(100),
              height: hp(100),
          }}>
  
          
        <ScrollView
          contentContainerStyle={{
          //   backgroundColor: '#b3b3b3',
            // flex: 1,
          }}>
  
  
          {data.map((data, i) => (
                    // <Poem text={poem.content} />
                    console.log(i),
                    <ListCard2 key={i} id={i+1} url={data.imgurl} theme={data.name} text={data.discription}/>
          ))}
  
  
  
              {/* <ListCard2 url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2stl9dfW--4uu-s5RWJNrZQ-fgdtDF26QoJrNPtpQ4-tZ0G1-&s'} theme={'Motivation Shayari'} text={'Push yourself, because no one else is going to do it for you.'}/>
              <ListCard2 url={'https://cdn.pixabay.com/photo/2018/08/03/04/36/love-3581038_960_720.jpg'} theme={'Love Shayari'} text={'I love to not love'}/>
              <ListCard2 url={'https://wallpaperaccess.com/full/119804.jpg'} theme={'Sad Shayari'} text={'No need to be sad hakunama tata.'}/>
              <ListCard2 url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nhky4qf7XBqviMUK8KUbKyC3b3A1W_B4aVEB0xSE_wMHEt4F&s'} theme={'Morning Shayari'} text={'Happy morning bole toh'}/>
              <ListCard2 url={'https://c0.wallpaperflare.com/preview/1014/739/809/india-chandigarh-barcode-ixc-android.jpg'} theme={'Good Night Shayari'} text={'Sweet Dream Batman'}/>
              <ListCard2 url={'https://i.pinimg.com/originals/26/a9/f4/26a9f47856b814bd67c1b458a88047a4.jpg'} theme={'Dosti Shayari'} text={'Mere yaaroan mere dost'}/>
              <ListCard2 url={'https://www.webgranth.com/wp-content/uploads/2013/12/Christmas-decoration-wallpapers.jpg'} theme={'Bewafa Shayari'} text={'I dont mean it seriously'}/>
              <ListCard2 url={'https://i.pinimg.com/originals/c1/9b/73/c19b734da0f637e55c57d327a80334f0.jpg'} theme={'Shayar Shayari'} text={'No Comments'}/>
              <ListCard2 url={'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/father-holding-hand-of-baby-sami-sarkis.jpg'} theme={'Maa Baap'} text={'No Comments'}/>
              <ListCard2 url={'https://i.pinimg.com/736x/36/97/a5/3697a5856a233e9db1e18a2584ec07c2.jpg'} theme={'Pati Patni Shayari'} text={'No comments'}/>
              <ListCard2 url={'https://lh6.googleusercontent.com/proxy/XfKTCtHxfdzEYKJJQ011Vbaf4wsTMsEvOL2fwo6B4g_C49ZXY0IXx1cmSKWpoNiWcUGC-zATl1m9r6vKUHhvJuoMnNnPxBZvpLyTxrZmEy3Mk_rvxNGP66pKgB2x0bo9R3wnGc_xXazKqtG0zGAbPA'} theme={'Rakhi Shayari'} text={'No comments'}/>
              <ListCard2 url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5edkrwmbpM8VrdE94JuAUKHnCZJlMcnWjH-XiWWHp4untkjwfQ&s'} theme={'Birthday Shayari'} text={'No comments'}/> */}
              {/* <ListCard2 url={''} theme={''} text={''}/>
              <ListCard2 url={''} theme={''} text={''}/>
              <ListCard2 url={''} theme={''} text={''}/>
              <ListCard2 url={''} theme={''} text={''}/>
              <ListCard2 url={''} theme={''} text={''}/>
              <ListCard2 url={''} theme={''} text={''}/> */}
            <View style={{
             width: wp(100),
             height: hp(5)
           }}>

           </View>
           </ScrollView>
           
           </ImageBackground>
      </View>)
  

    }
    
};

export default ListCategories2;
