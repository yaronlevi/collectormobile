import React, {View, Text, Component, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ScreenLogin extends React.Component {

    navigateBack() {
        this.props.navigator.pop();
    }

    render() {

        return (
            <View style={styles.container}>
                <Icon.Button name="facebook" backgroundColor="#3b5998" style={styles.facebookBtn} onPress={this.loginWithFacebook}>
                    התחבר עם פייסבוק
                </Icon.Button>
                <View style={styles.seperator} />
                <Icon.Button name="google" backgroundColor="#F90101" style={styles.googleBtn} onPress={this.loginWithFacebook}>
                    התחבר עם גוגל
                </Icon.Button>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    facebookBtn: {
        width:170          
    },
    googleBtn: {
        backgroundColor: '#F90101',
        width:170     
    },
    container:{
        paddingTop: 10,
        alignItems:'center'
    },
    seperator:{
        height:10
    }
});




