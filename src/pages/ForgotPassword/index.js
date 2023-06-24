import { StyleSheet, Text, View, TextInput } from "react-native";;
import { Link } from "@react-navigation/native";
import { useState } from "react";

import styles from "../../assets/styles.json";

export default function ForgotPasswordScreen() {

    let [email, onchangeEmail] = useState("");

    return (
        <View style={forgotPassword.container}>
            <Text style={forgotPassword.title}>Esqueceu sua senha?</Text>
            <View>
                <Text style={forgotPassword.text}>Precisamos apenas do seu e-mail de registro para enviarmos a restauração de senha</Text>
                <TextInput
                    style={forgotPassword.input}
                    value={email}
                    placeholder="E-mail address"
                    placeholderTextColor={styles.colors.tertiaryColor}
                    onChangeText={onchangeEmail}
                />
            </View>
            <Link
                style={forgotPassword.signin__link}
                to={{ screen: 'SignIn' }}>
                Restaurar senha
            </Link>
            <View>
                <Text style={forgotPassword.text}>Você não tem uma conta?</Text>
                <Link
                    style={forgotPassword.signup__link}
                    to={{ screen: 'SignUp' }}>
                    Inscrever-se
                </Link>
            </View>

        </View>
    );
}

const forgotPassword = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",

        padding: styles.screens.padding.container,
        backgroundColor: styles.colors.primaryColor,
    },
    title: {
        fontSize: styles.screens.fontSize.title,
        fontWeight: 200,
        color: styles.colors.textColor,
    },
    text: {
        marginBottom: styles.screens.margin.input,

        fontSize: styles.screens.fontSize.text,
        fontWeight: 200,
        textAlign: "center",
        color: styles.colors.tertiaryColor,
    },
    input: {
        padding: styles.screens.padding.link,
        borderRadius: 50,

        fontSize: styles.screens.fontSize.text,
        backgroundColor: styles.colors.secondaryColor,
        color: styles.colors.textColor,
    },
    signin__link: {
        padding: styles.screens.padding.link,
        borderRadius: 50,

        textAlign: "center",
        fontSize: styles.screens.fontSize.text,
        backgroundColor: styles.colors.highlightColor,
        color: styles.colors.textColor,
    },
    signup__link: {
        fontSize: styles.screens.fontSize.text,
        textAlign: "center",
        color: styles.colors.highlightColor,
    },
});