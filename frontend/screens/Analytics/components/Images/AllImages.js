import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Platform,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";

import { Text, Image } from "react-native";
import { ImageStyles } from "./images.scss";

const YTDemo = ({ videoId, width = 400, height = 300 }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  if (Platform.OS === "web") {
    return (
      <View style={styles.main}>
      <YouTubeEmbed
        url={`https://www.youtube.com/watch?v=${videoId}`}
        maxWidth={width}
        height={height}
        style={styles.main}
      />
      </View>
    );
  }

  return (
    <View style={[styles.container, { width, height }]}>
      <WebView
        source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        style={{ opacity: loading ? 0 : 1, width, height }}
        onLoad={handleLoad}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator size="large" style={styles.spinner} />
        )}
      />
    </View>
  );
};

const FBDemo = () => {
  return <></>;
};

const InstaDemo = ({ url, width = 400, height = 300 }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  if (Platform.OS === "web") {
    return (
      <View style={styles.main}>
        <InstagramEmbed
          url={url}
          maxWidth={width}
          height={height}
          style={styles.main}
        />
      </View>
    );
  }

  return (
    <View style={[styles.container, { width, height }]}>
      <WebView
        source={{ uri: `${url}?utm_source=ig_embed&utm_campaign=loading` }}
        style={{ opacity: loading ? 0 : 1, width, height }}
        onLoad={handleLoad}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator size="large" style={styles.spinner} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create(ImageStyles);

export { YTDemo, FBDemo, InstaDemo };
