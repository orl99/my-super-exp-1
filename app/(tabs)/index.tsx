import { StyleSheet, View } from "react-native";

import Button from '@/components/Button';
import ImageViewer from "@/components/ImageViewer";
const PlaceholderImage = require("@/assets/images/background-image.png");

import * as ImagePicker from 'expo-image-picker';

export default function Index() {


    // ImagePicker Init
    const pickerImageAsync = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'livePhotos', 'videos'],
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            console.log('Result', result);
        } else {
            alert('You did not select any image');
        }
    }


    return (
        <View
            style={styles.container}
        >
            <View style={styles.imageContainer}>
                <ImageViewer imageSource={PlaceholderImage} />
            </View>
            <View style={styles.footerContainer}>
                <Button theme="primary" label="Choose a photo" onPress={pickerImageAsync} />
                <Button label="Use this photo" />
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
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },

});

