import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function Login() {
    const [username, setUsername] = React.useState('email');
    const [password, setPassword] = React.useState('password');
    const [confirmPass, confPassword] = React.useState('confirm password');


    const loginPress = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Your Confirmation:', confirmPass);
    };



    return (
        <View style={styles.container}>
            <Text>
                LOGIN PAGE
            </Text>

            <TextInput
                style={styles.input}
                placeholder="email"
                keyboardType="email-address"
                onChangeText={setUsername}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="password"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />
            <TextInput
                style={styles.input}
                placeholder="confirm password"
                secureTextEntry
                onChangeText={confPassword}
                value={confirmPass}
            />
            <Button
                title={"Send"}
                onPress={loginPress}>

            </Button>


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },
});