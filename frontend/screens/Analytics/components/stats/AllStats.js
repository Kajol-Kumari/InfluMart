import { StyleSheet, View, Text } from "react-native";
import { statsStyles } from "./stats.scss";
import { formatNumber } from "../../../../helpers/GraphData";

const FBStats = ({ fbData }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.statsContainer]}>
        <Text style={styles.statsTitle}>
          {fbData?.followers &&
            `${formatNumber(Math.max(...fbData?.followers))} Followers`}
        </Text>
      </View>
      <View style={[styles.statsContainer]}>
        <Text style={styles.statsTitle}>
          {fbData?.likes &&
            `Avg Likes: ${formatNumber(Math.max(...fbData?.likes))}%`}
        </Text>
      </View>
    </View>
  );
};
const YTStats = ({ ytData }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.statsContainer]}>
        <Text style={styles.statsTitle}>
          {ytData?.subscriberCount &&
            `${formatNumber(Math.max(...ytData?.subscriberCount))} Subscribers`}
        </Text>
      </View>
      <View style={[styles.statsContainer]}>
        <Text style={styles.statsTitle}>
          {ytData?.viewCount &&
            `Avg Views: ${formatNumber(Math.max(...ytData?.viewCount))}`}
        </Text>
      </View>
    </View>
  );
};
const InstaStats = ({ instaData }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.statsContainer]}>
        <Text style={styles.statsTitle}>
          {instaData?.followers &&
            `${formatNumber(Math.max(...instaData?.followers))} Followers`}
        </Text>
      </View>
      <View style={[styles.statsContainer]}>
        <Text style={styles.statsTitle}>
          {instaData?.avgER &&
            `Engagement Rate: ${Math.max(...instaData?.avgER).toPrecision(2)}%`}
        </Text>
      </View>
      <View style={[styles.statsContainer, styles.fullWidth]}>
        <Text style={styles.statsTitle}>
          {instaData?.avgLikes &&
            `Average Likes Rate: ${formatNumber(
              Math.max(...instaData?.avgLikes)
            )}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(statsStyles);

export { FBStats, YTStats, InstaStats };
