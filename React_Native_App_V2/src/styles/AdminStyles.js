import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        backgroundColor: 'black'
    },
    scrollView:{
        borderWidth: 1,
        borderBottomWidth: 0,
        backgroundColor: 'gray',
        maxHeight: 430
    },
    text: {
        fontWeight: "bold",
        color: "white",
        fontSize: 12,
        padding: 1,
    },
    view: {
        flex: 1,
        justifyContent: 'space-evenly',
        borderWidth: 5,
        borderColor: 'black',
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
        textAlign: 'center',
        margin: 1,
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default styles;