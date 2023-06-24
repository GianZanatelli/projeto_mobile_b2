import { StyleSheet, Text, View, Image } from "react-native";;
import { Link } from "@react-navigation/native";

import styles from "../../assets/styles.json";

export default function WelcomeScreen() {

    return (
        <View style={welcome.container}>
            <Text style={welcome.title}>Bem-vindo!</Text>
            <View>
                <View style={welcome.logo__container}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={welcome.logo}
                    />
                </View>
                <Text style={welcome.text}>Assista filmes e séries que você ama!</Text>
            </View>
            <View>
                <Link
                    style={welcome.signin__link}
                    to={{ screen: 'SignIn' }}>
                    Entrar
                </Link>
                <View style={welcome.line__container}>
                    <View style={welcome.line}></View>
                    <Text style={welcome.line__text}>ou</Text>
                    <View style={welcome.line}></View>
                </View>
                <Link
                    style={welcome.signup__link}
                    to={{ screen: 'SignUp' }}>
                    Inscrever-se
                </Link>
            </View>
        </View>
    );
}

const welcome = StyleSheet.create({
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
    logo__container: {
        width: styles.screens.logo.width,
        height: styles.screens.logo.height,
        alignSelf: "center",
    },
    logo: {
        flex: 1,
        objectFit: "cover",
    },
    text: {
        fontSize: styles.screens.fontSize.text,
        fontWeight: 200,
        textAlign: "center",
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
        padding: styles.screens.padding.link,
        borderWidth: "0.15rem",
        borderRadius: 50,

        textAlign: "center",
        fontSize: styles.screens.fontSize.text,
        backgroundColor: "transparent",
        borderColor: styles.colors.highlightColor,
        color: styles.colors.highlightColor,
    },
    line__container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        marginTop: styles.screens.margin.container,
        marginBottom: styles.screens.margin.container,
    },
    line: {
        width: "40%",
        height: 0.5,
        backgroundColor: styles.colors.tertiaryColor,
    },
    line__text: {
        fontSize: styles.screens.fontSize.text,
        textAlign: "center",
        color: styles.colors.tertiaryColor,
    },
});