// import React, {Component} from 'react';
// import {Share, Button, View} from 'react-native';

// import { 
//   AdMobBanner, 
// } from 'react-native-admob'
 
// // Display a rewarded ad

// class ShareExample extends Component {
  
//   onShare = async () => {
//     try {
//       const result = await Share.share({
//         message:
//           'React Native | A framework for building native apps using React',
//       });

//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           // shared with activity type of result.activityType
//         } else {
//           // shared
//         }
//       } else if (result.action === Share.dismissedAction) {
//         // dismissed
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   render() {
//     // Display an interstitial
//     // AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/6300978111');
//     // AdMobInterstitial.setTestDeviceID('89S4ZHOZU4EYFYEM');
//     // AdMobInterstitial.requestAd(AdMobInterstitial.showAd);
//     return (
//       <View style={{
//         flex: 1,
//       }}>
//           <Button onPress={this.onShare} title="Share" />
//           {/* Display a banner */}
//           <AdMobBanner
//             bannerSize="fullBanner"
//             adUnitID="ca-app-pub-3940256099942544/6300978111"
//             testDeviceID="89S4ZHOZU4EYFYEM"
//             didFailToReceiveAdWithError={this.bannerError} />
//       </View>
    
//     );
//   }
// }

// export default ShareExample;