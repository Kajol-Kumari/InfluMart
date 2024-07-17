import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "expo-image";
import { getAllCollabPosts } from "../../controller/collabOpenController";
import { useAlert } from "../../util/AlertContext";
import { Padding } from "../../GlobalStyles";
import ImageWithFallback from "../../util/ImageWithFallback";

const CollabPost = ({ navigation }) => {
  const [selectedFooterItem, setSelectedFooterItem] = useState("My Network");
  const [data, setData] = useState([]);
  const { showAlert } = useAlert();
  useEffect(() => {
    const getData = async () => {
      await getAllCollabPosts(setData, showAlert);
    };

    getData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <Image
          source={require("../../assets/notification_icon_light.png")}
          style={{ width: 28, height: 28 }}
        />
      </View>
      <ScrollView>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Icon
              name="search"
              size={20}
              color="#888"
              style={styles.searchIcon}
            />
            <TextInput style={styles.searchInput} placeholder="Find" />
          </View>
        </View>

        <View style={styles.categories}>
          <Text style={styles.categoryTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {["Business", "Non-profit", "Art", "Technology"].map(
              (category, index) => (
                <View key={index} style={styles.categoryTag}>
                  <Text>{category}</Text>
                </View>
              )
            )}
          </ScrollView>
        </View>

        <View style={styles.posts}>
          {data?.map((post, index) => (
            <Pressable
              key={index}
              onPress={() => {
                navigation.navigate("CampaignDetail", { data: post });
              }}
            >
              <View style={styles.postCard}>
                <View style={styles.postContent}>
                  <Text style={styles.postTitle}>{post.brandName}</Text>
                  <Text style={styles.postName}>{post.campaignType}</Text>
                  <Text
                    style={styles.postDegree}
                  >{`${post.numberOfInfluencers} Influencers needed`}</Text>
                </View>
                {post?.imageSource == null ? (
                  <ImageWithFallback
                    imageStyle={styles.postImage}
                    image={post?.imageSource}
                  />
                ) : (
                  post?.imageSource && (
                    <ImageWithFallback
                      imageStyle={styles.postImage}
                      image={post?.imageSource}
                    />
                  )
                )}
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        {[
          {
            name: "Home",
            icon: require("../../assets/depth-5-frame-01.png"),
            navigate: "BrandProfile",
          },
          {
            name: "My Network",
            icon: require("../../assets/network_icon_light.png"),
            navigate: "CollabPost",
          },
          {
            name: "Post",
            icon: require("../../assets/post_icon.png"),
            navigate: "CollabForm",
          },
          {
            name: "Notification",
            icon: require("../../assets/notification_icon_light.png"),
            navigate: "CollabPost",
          },
          {
            name: "You",
            icon: require("../../assets/depth-5-frame-04.png"),
            navigate: "UserProfile",
          },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.footerItem}
            onPress={() => navigation.navigate(item.navigate)}
          >
            <Image style={{ width: 24, height: 24 }} source={item.icon} />
            <Text
              style={[
                styles.footerItemText,
                selectedFooterItem === item.name &&
                  styles.footerItemTextSelected,
              ]}
            >
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
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8EDF2",
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
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
    fontWeight: "bold",
    marginBottom: 8,
  },
  categoryTag: {
    backgroundColor: "#E8EDF2",
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  posts: {
    padding: 16,
  },
  postCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    height: "auto",
    paddingHorizontal: Padding.p_base,
  },
  postContent: {
    flex: 1,
    paddingVertical: 16,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    overflow: "hidden",
  },
  postName: {
    fontSize: 14,
    color: "#4F7396",
  },
  postDegree: {
    fontSize: 12,
    color: "#4F7396",
  },
  postImage: {
    width: 130,
    height: 65,
    borderRadius: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  footerItem: {
    alignItems: "center",
  },
  footerItemText: {
    fontSize: 12,
    color: "#555",
    marginTop: 6,
  },
  footerItemTextSelected: {
    color: "#000",
  },
});

export default CollabPost;
