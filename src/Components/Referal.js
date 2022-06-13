
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
    TextInput
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Referal() {
    return (
        <View style={styles.constainer}>
            <Text style={styles.text}>Referral</Text>
            <View style={styles.backgroundContainer}>
                <View style={styles.background}>
                    <View style={{
                        marginTop: hp('8%'),
                        marginLeft: wp('5%')
                    }}>
                        <TouchableOpacity>
                            <Text style={{
                                color: '#9370db',

                            }}>REFFERL CODE</Text>
                        </TouchableOpacity>
                        <Text style={{
                            color: 'black',
                            fontSize: 18,
                            marginTop: hp('2%'),
                            fontWeight: 'bold'
                        }}>My Code : 7</Text>
                        <Text style={{
                            color: '#D3D3D3',
                            marginTop: hp('2%'),
                        }}>Invite your friends And{'\n'}Be healthy together</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Invitor's referl code"
                            placeholderTextColor="#D3D3D3"
                        />
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        marginTop: hp('5%'),
        paddingBottom:10
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
        height: hp("50%"),
        width: wp('80%'),
        backgroundColor: 'white',
        borderRadius: 16,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 6,
    },
    input: {
        height: 40,
        marginTop: hp('7%'),
        marginRight: wp('6%'),
        // backgroundColor:'white',
        borderRadius:6,
        color:"#D3D3D3"
    },
    button: {
        backgroundColor: '#9370db',
        height: hp('6%'),
        marginRight: wp('6%'),
        marginTop: hp('2%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    }
});