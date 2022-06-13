
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function MyMembership() {
    return (
        <View style={styles.constainer}>
            <Text style={styles.text}>My Membership</Text>
            <View style={styles.backgroundContainer}>
                <View style={styles.background}>
                    <View style={{ marginLeft: wp('6%'), marginTop: hp('5%') }}>
                        <Text style={{ color: '#D3D3D3', fontWeight: 'bold' }}>Diomand</Text>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, marginTop: hp('1.5%') }}>
                            Level 7
                        </Text>
                        <Text style={{ color: '#D3D3D3' }}>80000</Text>
                    </View>
                    <View style={styles.imageContianer}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://www.seekpng.com/png/detail/778-7787991_services-girl-hd-background-dance-fitness.png',
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        marginTop: hp('5%'),
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginLeft: wp('8%')
    },
    backgroundContainer: {
        alignItems: 'center',
        marginTop: hp('2%'),

    },
    background: {
        height: hp("20%"),
        width: wp('80%'),
        backgroundColor: 'white',
        borderRadius: 16,
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 6
    },
    tinyLogo: {
    width: wp('30%'),
    height: hp('20%'),
    borderTopRightRadius:6
  },
  imageContianer:{
    marginLeft:wp('30%'),

  }

});