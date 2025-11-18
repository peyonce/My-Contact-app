import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatItem from '../../components/ChatItem';
import ContactAvatar from '../../components/ContactAvatar';

function ChatScreen() {
  return (
    <View style={styles.screen}>
      {/* Chats Header Section - Centered */}
      <View style={styles.headerSection}>
        <Text style={styles.header}>Chats</Text>
        
        <View style={styles.contactsContainer}>
          <ContactAvatar name="Mira" />
          <ContactAvatar name="Phill" />
          <ContactAvatar name="Mike" />
          <ContactAvatar name="Kierra" />
        </View>
      </View>

      {/* Recent Chat Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Recent Chat</Text>

        <ChatItem 
          name="Phillip Geidt"
          time="1:34"
          message="Phillip is typing..."
          typing={true}
        />

        <ChatItem 
          name="Kierra from Match"
          time="1:05"
          message="Voice message"
          voice={true}
        />

        <ChatItem 
          name="Mike Smith"
          time="10:31"
          message="Yes, put my name down..."
        />

        <ChatItem 
          name="Stacey Neighbor" 
          time="08:12"
          message="Hill Her mom already used it"
        />
      </View>

      {/* Group Chat Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Group Chat</Text>

        <ChatItem 
          name="Kevin's BP"
          time="12:32" 
          message="Kate and Ann are typing..."
          typing={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    paddingTop: 35,
  },
  headerSection: {
    backgroundColor: '#F2F2F7',
    borderRadius: 20,
    padding: 14,
    marginBottom: 10,
    alignItems: 'center', // Center the content
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center', // Center the text
  },
  contactsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%', // Take full width
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  sectionHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
});

export default ChatScreen;
