import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri: 'https://www.travelandleisure.com/thmb/Qa7_o8_XVpIVH5vqq7i73UlTSkU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Eiffel Tower</Text>
            <Text style={styles.cardLabel}>Paris, France</Text>
            <Text style={styles.cardDescription}>It impressed the entire world by its stature and daring design, and symbolized French know-how and industrial genius..</Text>
            <Text style={styles.cardFooter}>Know more..</Text>
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
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
        
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
        
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000'
    }

})