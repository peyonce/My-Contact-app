import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ChatItemProps = {
  name: string;
  time: string;
  message: string;
  typing?: boolean;
  voice?: boolean;
};

function ChatItem({ name, time, message, typing, voice }: ChatItemProps) {
  // Different colors for different people - looks like custom design
  const getAvatarColor = (): string => {
    const colors: { [key: string]: string } = {
      'P': '#007AFF', // Phillip - Blue
      'K': '#34C759', // Kierra - Green
      'M': '#FF9500', // Mike - Orange
      'S': '#AF52DE', // Stacey - Purple
      'Kevin': '#FF3B30', // Kevin - Red
    };
    
    const firstLetter = name.charAt(0);
    return colors[firstLetter] || colors[name] || '#8E8E93';
  };

  return (
    <View style={styles.chatItem}>
      <View style={[styles.avatar, {backgroundColor: getAvatarColor()}]}>
        <Text style={styles.avatarLetter}>
          {name.charAt(0)}
        </Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        
        <Text style={[
          styles.message,
          typing && styles.typingText,
          voice && styles.voiceText
        ]} numberOfLines={1}>
          {message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  avatarLetter: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1,
  },
  name: {
    fontSize: 11,
    fontWeight: '600',
    color: '#000000',
  },
  time: {
    fontSize: 9,
    color: '#8E8E93',
  },
  message: {
    fontSize: 9,
    color: '#8E8E93',
  },
  typingText: {
    color: '#007AFF',
    fontWeight: '500',
  },
  voiceText: {
    color: '#007AFF',
    fontWeight: '500',
  },
});

export default ChatItem;
