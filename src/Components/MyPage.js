import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,

} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const image = { uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-leg-exercises-for-women-1595274323.jpg" };
export default function MyPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.myPage}>My Page</Text>
            <View style={styles.ImageBackground}>
                <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={styles.image}
                    imageStyle={{ borderRadius: 16 }}>
                    <View style={{marginLeft:wp('5%'),marginBottom:hp('10%')}}>
                        <TouchableOpacity>
                            <Text style={{ color: '#9370db' }}>EARN</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: 'bold',marginTop:hp('2%'),lineHeight:30}}>
                            634.2(from API{'\n'}response)
                        </Text>
                        <Text style={{ fontSize: 13, fontWeight: 'bold',marginTop:hp('2%'),lineHeight:20}}>
                            Be healthy with{'\n'}Healthy apps.
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    myPage: {
        fontSize: 30,
        color: 'black',
        marginLeft: wp('8%')
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: wp('85%'),
        height: hp("45%"),
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    ImageBackground: {
        alignItems: 'center',
        marginTop: hp("2%"),
    },
});