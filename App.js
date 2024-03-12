import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';

export default function App() {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('./assets/icon.png')}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileDetailsContainer}>
          <Text style={styles.profileHeading}>The Octocate</Text>
          <Text style={[styles.profileText, { color: 'blue' }]}>octocate</Text>
          <Text style={styles.profileText}>Join 25 Jan 2011</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          voluptas soluta dolorem nesciunt velit incidunt sapiente ipsa
          assumenda reiciendis sint!
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statText}>RePost</Text>
          <Text style={styles.statText}>8</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statText}>Follower</Text>
          <Text style={styles.statText}>3938</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statText}>Following</Text>
          <Text style={styles.statText}>9</Text>
        </View>
      </View>
      <View style={styles.linksContainer}>
        <View style={styles.link}>
          <Entypo name="location-pin" size={24} color="black" />
          <Text style={styles.linkText}>san francisco</Text>
        </View>
        <View style={styles.link}>
          <AntDesign name="link" size={24} color="black" />
          <Text
            style={[styles.linkText, { color: 'blue' }]}
            onPress={() => handlePress('https://nanodevlab.com/')}>
            https://nanodevlab.com/
          </Text>
        </View>
        <View style={styles.link}>
          <AntDesign name="twitter" size={24} color="black" />
          <Text
            style={[styles.linkText, { color: 'blue' }]}
            onPress={() => handlePress('https://twitter.com/iqbalshuvod')}>
            https://twitter.com/iqbalshuvod
          </Text>
        </View>
        <View style={styles.link}>
          <AntDesign name="github" size={24} color="black" />
          <Text
            style={[styles.linkText, { color: 'blue' }]}
            onPress={() =>
              handlePress('https://github.com/Iqbalhossainshuvo')
            }>
            https://github.com/Iqbalhossainshuvo
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImageContainer: {
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
    alignItems: 'center',
    alignContent: 'center',
  },
  profileDetailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  profileHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileText: {
    fontSize: 14,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor:'#f1f5f9',
   padding:20,
   borderRadius:15,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  linksContainer: {
    flex: 1,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  linkText: {
    fontSize: 16,
    marginLeft: 5,
  },
});




// import { StyleSheet, Text, View, Image } from 'react-native';
// import { Entypo } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';

// export default function App() {
//   const handlePress = (url) => {
//     Linking.openURL(url);
//   };

//   return (
//     <View
//       style={[
//         styles.container,
//         {

//           flexDirection: 'column',
//         },
//       ]}>
//       <View style={styles1.container}>
//         <View style={styles1.imageContainer}>
//           <Image
//             source={require('./assets/icon.png')}
//             style={styles1.image}
//           />
//         </View>
//         <View style={styles1.detailsContainer}>
//           <Text style={styles1.heading}>The Octocate</Text>
//           <Text style={[styles1.text, { color: 'blue' }]}>octocate</Text>
//           <Text style={styles1.text}>Join 25 Jan 2011</Text>
//         </View>
//       </View>
//       <View style={{ flex: 2, flexDirection: 'row' }}>
//         <Text style={styles2.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptas soluta dolorem nesciunt velit incidunt sapiente ipsa assumenda reiciendis sint!</Text>
//       </View>
//       <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', backgroundColor: '#f1f5f9', borderRadius: 10, marginBottom: 20 }}>
//         <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
//           <Text>RePost</Text>
//           <Text>8</Text>
//         </View>
//         <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
//           <Text>Follower</Text>
//           <Text>3938</Text>
//         </View>
//         <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginLeft: 10 }}>
//           <Text>Following</Text>
//           <Text>9</Text>
//         </View>
//       </View>
//       <View style={{ flex: 3, flexDirection: 'colum', }}>
//         <View style={{ flex: 1, flexDirection: 'row' }}>
//           <View style={{ flex: 2 }}>
//             <Entypo name="location-pin" size={24} color="black" /></View>
//           <View style={{ flex: 4, marginLeft: -100 }}><Text>san francisco</Text></View>
//         </View>
//         <View style={{ flex: 1, flexDirection: 'row' }}>
//           <View style={{ flex: 2 }}>
//             <AntDesign name="link" size={24} color="black" /></View>
//           <View style={{ flex: 4, marginLeft: -100 }}><Text style={{ color: 'blue', fontSize: 12 }} onPress={() => handlePress('https://nanodevlab.com/')}>https://nanodevlab.com/</Text></View>
//         </View>
//         <View style={{ flex: 1, flexDirection: 'row' }}>
//           <View style={{ flex: 2 }}>
//             <AntDesign name="twitter" size={24} color="black" /></View>
//           <View style={{ flex: 4, marginLeft: -100 }}><Text style={{ color: 'blue', fontSize: 12 }} onPress={() => handlePress('https://twitter.com/iqbalshuvod')} >https://twitter.com/iqbalshuvod</Text></View>
//         </View>
//         <View style={{ flex: 1, flexDirection: 'row' }}>
//           <View style={{ flex: 2 }}>
//             <AntDesign name="github" size={24} color="black" />
//           </View>
//           <View style={{ flex: 4, marginLeft: -100 }}><Text style={{ color: 'blue', fontSize: 12 }} onPress={() => handlePress('https://github.com/Iqbalhossainshuvo')}>https://github.com/Iqbalhossainshuvo</Text></View>
//         </View>
//       </View>

//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });

// const styles1 = StyleSheet.create({
//   container: {
//     flex: 2,
//     flexDirection: 'row',
//   },
//   imageContainer: {
//     flex: 2,
//     justifyContent: 'center',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     margin: 10,
//     alignItems: 'center',
//     alignContent: 'center',
//   },
//   detailsContainer: {
//     flex: 4,
//     justifyContent: 'center',
//   },
//   heading: {
//     marginLeft: 20,
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   text: {
//     marginLeft: 20,
//     fontSize: 14,
//   },
// });

// const styles2 = StyleSheet.create({
//   paragraph: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: '#333'
//   }
// })