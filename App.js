
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyPage from './src/Components/MyPage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MyMembership from './src/Components/MyMembership';
import Referal from './src/Components/Referal';
const App = () => {
  return (
    <View style={styles.sectionContainer}>
      {/* <Text style={{ color: 'black' }}>Saif</Text> */}
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={35} color="black" style={styles.iconStyle} />
      </TouchableOpacity>
      <ScrollView>
        <MyPage />
        <MyMembership />
        <Referal />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  iconStyle: {
    margin: 15
  }
});

export default App;
