import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "gray",
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        margin: 2,
        fontWeight: "bold",
        color: "white",
        padding: 2,
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 16
    },
    scrollView: {
        backgroundColor: '#463d4a',
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        margin: 10,
        alignSelf: 'center',
    },
    text: {
        fontWeight: "bold",
        color: "white",
        fontSize: 14,
        borderColor: 'white',
        padding: 1
    },
    textProfile: {
        fontWeight: "bold",
        color: "white",
        fontSize: 14,
        borderColor: 'white',
        padding: 1,
    },
    view: {
        alignSelf: 'center',
        width: 200,
        justifyContent: 'flex-end',
    },
    profileRow: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
});

export default styles;