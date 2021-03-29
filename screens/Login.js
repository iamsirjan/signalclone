import React,{useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import {Button, Input, Image} from "react-native-elements";
import {StatusBar} from "expo-status-bar";
const Login = () => {
   
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

     const signIn = () => {

     }


    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Image 
            source = {{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png",
            }}
            style={{ width:200, height:200}}
            />
            <View style = {styles.inputContainer}>
                <Input placeholder="Email" autofocus type="email"  value={email} 
                onChangeText= {(text) => setEmail(text)}
                />
                
                <Input placeholder="Password" secureTextEntry type="password" value={password}
                 onChangeText= {(text) => setPassword(text)}
                />

            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} type="outline" title="Register" />
            <View style={{height: 100}} />
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding:10,
        backgroundColor: "white",
    },
    inputContainer: {
        marginTop:10,
        width:300,
    },
    button: {
        width:200,
        marginTop:10,
    },
})
