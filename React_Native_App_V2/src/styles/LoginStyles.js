import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#262626",
    },
    loginHeader: {
        fontSize: 20,
        color: "white",
        fontWeight: "300",
        marginBottom: 0,
        textAlign: 'center',
        marginBottom: 50,
        backgroundColor: '#463d4a',
        fontWeight: 'bold',
        fontFamily: ''
    },
    label: {
        fontWeight: "700",
        color: "black",
        fontSize: 14,
        padding: 5,
        alignContent: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: 'white',
        width: 180,
        alignSelf: 'center'
    },
    inputFiled: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    },
    inputField: {
        borderBottomColor: "white",
        marginBottom: 20,
        padding: 2,
        borderWidth: 1,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        color: "white",
    },
    showButton: {
        position: "absolute",
        right: 0
    },
    showButtonText: {
        color: "white",
        fontWeight: "700"
    }
});

export default styles;