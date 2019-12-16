import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 2,
        marginVertical: 2
    },
    text: {
        fontWeight: "bold",
        color: "white",
        fontSize: 12,
        padding: 3,

    },
    view: {
        flex: 1,
        justifyContent: 'space-evenly',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 15,
        padding: 10,
        backgroundColor: 'gray'
    },
    backButton: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 2,
        margin: 10,
        color: 'white',
        backgroundColor: 'gray',
        alignContent: 'center',
        textAlign: 'center'
    },
    wrapper: {
        flex: 1,
        backgroundColor: "#262626"
    },
    loginHeader: {
        fontSize: 16,
        color: "white",
        fontWeight: "300",
        marginBottom: 0,
        textAlign: 'center',
        backgroundColor: '#463d4a',
        fontWeight: 'bold',
    },
    addInputStyle: {
        borderBottomWidth: 1,
        borderColor: 'white',
        padding: 0
    }
});

export default styles;