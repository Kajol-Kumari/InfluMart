import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity,Pressable } from "react-native";
import {
  Padding,
  FontSize,
  Color,
  FontFamily,
  Border,
} from "../../../../GlobalStyles";
import { InfluencerHelpCenterStyles } from "./InfluencerHelpCenter.scss";

const FAQItem = ({ question, answer,active,index,setIndex }) => (
  <Pressable style={styles.faqItem} onPress={()=>{active?setIndex(""):setIndex(index)}}>
    <View style={styles.faqQuestionContainer}>
      <Text style={styles.faqQuestion}>{question}</Text>
      <Image
        style={[styles.faqIcon,{transform:[{rotate:active?"180deg":"0deg"}]}]}
        contentFit="cover"
        source={require("../../../../assets/down_symbol.png")}
      />
    </View>
    {answer&&active && <Text style={styles.faqAnswer}>{answer}</Text>}
  </Pressable>
);

const InfluencerHelpCenter = ({route,navigation}) => {
  const navigate = route.params?.navigate

  const questions=[
    {
      question:"How does Influmart work?",
      answer:"Influmart is a platform that connects influencers with brands. Brands can post campaigns and influencers apply for them."
    },
    {
      question:"What is Influmart?",
      answer:"Influmart is a platform that connects influencers with brands. Brands can post campaigns and influencers apply for them."
    },
    {
      question:"Is it free to use Influmart?",
      answer:"Influmart is a platform that connects influencers with brands. Brands can post campaigns and influencers apply for them."
    },
    {
      question:"Who can use Influmart?",
      answer:"Influmart is a platform that connects influencers with brands. Brands can post campaigns and influencers apply for them."
    },
    {
      question:"Can I use Influmart on my phone?",
      answer:"Influmart is a platform that connects influencers with brands. Brands can post campaigns and influencers apply for them."
    },
    {
      question:"What happens if I don't log in?",
      answer:"Influmart is a platform that connects influencers with brands. Brands can post campaigns and influencers apply for them."
    }
  ]

  const[activeIndex,setActiveIndex]=React.useState(questions.length);

  return (
    <ScrollView style={styles.helpcenter}>
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate(navigate)}>
        <View style={styles.headerContent}>
          <Image
            style={styles.headerImage}
            contentFit="cover"
            source={require("../../../../assets/depth-4-frame-07.png")}
          />
          <Text style={styles.headerText}>Help Center</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FAQs</Text>
      </View>
      <View style={styles.faqsContainer}>
        {
          questions&&questions?.map((currentQuestion,index)=>{
            return(
              <FAQItem key={index} question={currentQuestion?.question} answer={currentQuestion?.answer} active={activeIndex===index?true:false} index={index} setIndex={setActiveIndex}/>
            )
          })
        }
      </View>
      <View style={styles.footerSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create(InfluencerHelpCenterStyles);

export default InfluencerHelpCenter;
