import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CollabPost = () => {
  const [selectedFooterItem, setSelectedFooterItem] = useState('Home');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <Icon name="bell" size={24} color="#000" />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Find" />
        </View>
      </View>

      <View style={styles.categories}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Business', 'Non-profit', 'Art', 'Technology'].map((category, index) => (
            <View key={index} style={styles.categoryTag}>
              <Text>{category}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.posts}>
        {[
          { title: 'Looking for a co-founder in the fintech space', name: 'Athena G.', degree: '1st Degree' },
          { title: 'Seeking to collaborate with non-profit organizations', name: 'Jocelyn W.', degree: '2nd Degree' },
          { title: 'Looking for a full-time artist to join my team', name: 'Linda R.', degree: '3rd Degree' },
          { title: 'Looking for a co-founder in the fintech space', name: 'Athena G.', degree: '1st Degree' },
        ].map((post, index) => (
          <View key={index} style={styles.postCard}>
            <View style={styles.postContent}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Text style={styles.postName}>{post.name}</Text>
              <Text style={styles.postDegree}>{post.degree}</Text>
            </View>
            <Image style={styles.postImage} source={{ uri: 'https://via.placeholder.com/130x65' }} />
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        {[
          { name: 'Home', icon: 'home' },
          { name: 'My Network', icon: 'users' },
          { name: 'Post', icon: 'plus-square' },
          { name: 'Notification', icon: 'bell' },
          { name: 'You', icon: 'user' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.footerItem} onPress={() => setSelectedFooterItem(item.name)}>
            <Icon name={item.icon} size={24} color={selectedFooterItem === item.name ? '#000' : '#555'} />
            <Text style={[styles.footerItemText, selectedFooterItem === item.name && styles.footerItemTextSelected]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8EDF2',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',

  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,    
  },
  categories: {
    padding: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoryTag: {
    backgroundColor: '#E8EDF2',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  posts: {
    padding: 16,
  },
  postCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    height: 97,
  },
  postContent: {
    flex: 1,
    padding: 16,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postName: {
    fontSize: 14,
    color: '#4F7396',
  },
  postDegree: {
    fontSize: 12,
    color: '#4F7396',
  },
  postImage: {
    width: 130,
    height: 65,
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerItemText: {
    fontSize: 12,
    color: '#555',
  },
  footerItemTextSelected: {
    color: '#000',
  },
});

export default CollabPost;