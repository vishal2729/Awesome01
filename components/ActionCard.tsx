import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>React Native</Text>
            <View style={[styles.card, styles.elevatedCard]} >
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What is React Native?
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://crowdbotics.ghost.io/content/images/size/w1000/2021/02/ReactNativeFeaturedImage.png',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer} >
                    <Text numberOfLines={3}>
                        React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.
                    </Text>
                </View>
                <View style={styles.footerContainer} >
                    <TouchableOpacity
                        onPress={() => openWebsite('https://reactnative.dev/')}
                    >
                        <Text style={styles.wikipediaLinks} >Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://en.wikipedia.org/wiki/React_Native')}
                    >
                        <Text style={styles.wikipediaLinks}>Wikipedia</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#12B0E8',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    wikipediaLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6

    }

})