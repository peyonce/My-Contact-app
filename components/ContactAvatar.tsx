import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ContactAvatarProps = {
  name: string;
};

function ContactAvatar({ name }: ContactAvatarProps) {
  let color = '#8E8E93';
  
  if (name === 'Mira') color = '#5856D6';
  if (name === 'Phill') color = '#007AFF';
  if (name === 'Mike') color = '#FF9500';
  if (name === 'Kierra') color = '#34C759';

  return (
    <View style={styles.contactItem}>
      <View style={[styles.avatar, {backgroundColor: color}]}>
        <Text style={styles.avatarLetter}>
          {name.charAt(0)}
        </Text>
      </View>
      <Text style={styles.contactName}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contactItem: {
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  avatarLetter: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactName: {
    fontSize: 11,
    fontWeight: '600',
    color: '#000000',
  },
});

export default ContactAvatar;
