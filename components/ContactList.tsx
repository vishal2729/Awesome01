import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Klaus',
          status: 'The Devil, The Original Hybrid',
          imageUrl: 'https://www.themobileindian.com/wp-content/uploads/2021/06/facebook-avatar-main.jpg',
        },
        {
          uid: 2,
          name: 'Elijah',
          status: 'The Noble Vampire',
          imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png',
        },
        {
          uid: 3,
          name: 'Damon',
          status: 'The Pyscho Vampire',
          imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b3053232163929.567197ac6e6f5.png',
        },
        {
          uid: 4,
          name: 'Stephan',
          status: 'The Ripper',
          imageUrl: 'https://www.themobileindian.com/wp-content/uploads/2021/06/facebook-avatar-main.jpg',
        },
      ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
        
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12
    }
})