import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1b262c'
    },
    resultContainer: {
        height: 70,
        marginTop: 80,
        justifyContent: 'center',
        borderColor: "#bbe1fa",
        borderWidth: 2,
        alignItems: 'center'
    },
    resultValue: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold"
    },
    inputContainer: {
        height: 70,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "#bbe1fa"
    },
    input: {
        fontSize: 30,
        textAlign: 'center',
        color: "#fff"
    },
    convertButtonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    converterButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: "33.3%",
        borderWidth: 2,
        borderColor: "#bbe1fa",
        marginTop: 10,
        backgroundColor: "#0f4c75"
    },
    converterButtonText: {
        color: "#fff",
        fontSize: 15,
    }
});

export default styles;