//AllGraphs.js
import { StyleSheet,View,Text } from "react-native";
import { formatNumber } from "../../../../helpers/GraphData";
import graphStyles from "./graphs.scss";
import MyLineChart from "../../../../shared/MyLineChart"

const YTGraph = ({ ytData }) => {
  return (
    <>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Subscribers Over Time</Text>
        <Text style={styles.chartValue}>
          {ytData?.subscriberCount &&
            `${formatNumber(Math.max(...ytData?.subscriberCount))}`}
        </Text>
        <Text
          style={styles.chartDesc}
        >{`Last ${ytData?.subscriberCount?.length} Months`}</Text>
        <MyLineChart
          data={ytData?.subscriberCount}
          title={"Subscribers data"}
          tracking={ytData?.trackingData}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Views Over Time</Text>
        <Text style={styles.chartValue}>
          {ytData?.viewCount &&
            `${formatNumber(Math.max(...ytData?.viewCount))}`}
        </Text>
        <Text
          style={styles.chartDesc}
        >{`Last ${ytData?.viewCount?.length} Months`}</Text>
        <MyLineChart
          data={ytData?.viewCount}
          title={"Views data"}
          tracking={ytData?.trackingData}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Videos Over Time</Text>
        <Text style={styles.chartValue}>
          {ytData?.videoCount &&
            `${formatNumber(Math.max(...ytData?.videoCount))}`}
        </Text>
        <Text
          style={styles.chartDesc}
        >{`Last ${ytData?.videoCount?.length} Months`}</Text>
        <MyLineChart
          data={ytData?.videoCount}
          title={"Videos data"}
          tracking={ytData?.trackingData}
        />
      </View>
    </>
  );
};
const FBGraph = ({ fbData }) => {
  return (
    <>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Followers Over Time</Text>
        <Text style={styles.chartValue}>
          {fbData?.followers &&
            `${formatNumber(Math.max(...fbData?.followers))}`}
        </Text>
        <Text
          style={styles.chartDesc}
        >{`Last ${fbData?.followers?.length} Months`}</Text>
        <MyLineChart
          data={fbData?.followers}
          tracking={fbData?.trackingData}
          title={"Followers data"}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Likes Over Time</Text>
        <Text style={styles.chartValue}>
          {fbData?.likes && `${formatNumber(Math.max(...fbData?.likes))}`}
        </Text>
        <Text
          style={styles.chartDesc}
        >{`Last ${fbData?.likes?.length} Months`}</Text>
        <MyLineChart
          data={fbData?.likes}
          tracking={fbData?.trackingData}
          title={"Likes data"}
        />
      </View>
    </>
  );
};
function IgGraph({ instaData }){
  return (
    <View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Engagement Rate Over Time</Text>
        <Text style={styles.chartValue}>
          {instaData?.avgER &&
            `${Math.max(...instaData?.avgER).toPrecision(2)}%`}
        </Text>
        <Text
          style={styles.chartDesc}
        >{`Last ${instaData?.avgER?.length} Months`}</Text>
        <MyLineChart
          data={instaData?.avgER}
          tracking={instaData?.trackingData}
          title={"Followers data"}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Likes Over Time</Text>
        <Text style={styles.chartValue}>
          {instaData?.avgLikes &&
            `${formatNumber(Math.max(...instaData?.avgLikes))}`}
        </Text>
        <Text
          style={styles.chartDesc}
        >{`Last ${instaData?.avgLikes?.length} Months`}</Text>
        <MyLineChart
          data={instaData?.avgLikes}
          tracking={instaData?.trackingData}
          title={"Average Likes data"}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Comments Over Time</Text>
        <Text style={styles.chartValue}>
          {instaData?.avgComments &&
            `${formatNumber(Math.max(...instaData?.avgComments))}`}
        </Text>
        <Text
          style={styles.chartDesc}
        >{`Last ${instaData?.avgComments?.length} Months`}</Text>
        <MyLineChart
          data={instaData?.avgComments}
          tracking={instaData?.trackingData}
          title={"Average Comments data"}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Interactions Over Time</Text>
        <Text style={styles.chartValue}>
          {instaData?.avgInteractions &&
            `${formatNumber(Math.max(...instaData?.avgInteractions))}`}
        </Text>
        <Text
          style={styles.chartDesc}
        >{`Last ${instaData?.avgInteractions?.length} Months`}</Text>
        <MyLineChart
          data={instaData?.avgInteractions}
          tracking={instaData?.trackingData}
          title={"Average Interactions data"}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Followers Over Time</Text>
        <Text style={styles.chartValue}>
          {instaData?.followers &&
            `${formatNumber(Math.max(...instaData?.followers))}`}
        </Text>
        <Text
          style={styles.chartDesc}
        >{`Last ${instaData?.followers?.length} Months`}</Text>
        <MyLineChart
          data={instaData?.followers}
          tracking={instaData?.trackingData}
          title={"Average Engagement Rate data"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create(graphStyles)

export { YTGraph, FBGraph, IgGraph };
