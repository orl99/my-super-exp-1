import { StyleSheet, View } from "react-native";

import ImageViewer from "@/components/ImageViewer";
const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.imageContainer}>
                <ImageViewer imageSource={PlaceholderImage} />
            </View>
            {/* <Link style={styles.button} href="./about">Go to About</Link> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
    text: {
        color: '#fff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});

