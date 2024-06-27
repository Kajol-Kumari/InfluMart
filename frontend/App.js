const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Homepage from "./screens/Homepage";
import BrandorInfluencer from "./screens/BrandorInfluencer";
import OtpVerification from "./screens/OtpVerification";
import LoginPage from "./screens/login/LoginPage";
import FriendRequestPage from "./screens/FriendRequestPage";
import AccountCreatedSuccessfullyNoti from "./screens/AccountCreatedSuccessfullyNoti";
import FailedPaymentStatus from "./screens/FailedPaymentStatus";
import Analytics from "./screens/Analytics/Analytics";
import InfluencersList from "./screens/InfluencersList";
import InboxInterface from "./screens/inbox/InboxInterface";
import ChatInterface from "./screens/chat/ChatInterface";
import UserProfile from "./screens/UserProfile";
import InfluencerRegistrationForm from "./screens/Influencer/InfluencerRegistrationForm";
import PlanChooseInterface from "./screens/Influencer/PlanChooseInterface";
import LoginPageBrand from "./screens/login/LoginPageBrands";
import BrandAssosciated from "./screens/BrandsAssosciated";
import BrandProfile from "./screens/BrandProfile";
import AdminPanel from "./screens/AdminPanel";
import FilterUI from "./screens/FiltersUI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import BrandAccountSignupDataPreview from "./screens/BrandAccountSignupDataPreview";
import BrandRegistrationForm from "./screens/signup/BrandRegistrationForm";
import AddHandles from "./screens/Influencer/components/AddHandles";
import PricePerPost from "./screens/Influencer/components/PricePerPost";
import UserProfilePhoto from "./screens/Influencer/components/UserProfilePhoto";
import MaxFollowersNo from "./screens/Influencer/components/MaxFollowersNo";
import InfluencerConfirmAccount from "./screens/Influencer/InfluencerConfirmAccount";
import { AlertProvider } from "./util/AlertContext";
import InfluencerAccountSuccess from "./screens/Influencer/InfluencerAccountSuccess";
import InfluencerLogOutPage from "./screens/Influencer/Settings/InfluencerLogout";
import InfluencerDeleteAccountPage from "./screens/Influencer/Settings/Support/InfluencerDeleteAccount";
import InfluencerContactUs from "./screens/Influencer/Settings/Support/InfluencerContactUs";
import InfluencerHelpCenter from "./screens/Influencer/Settings/Support/InfluencerHelpCenter";
import InfluencerManageAccount from "./screens/Influencer/Settings/InfluencerAccountManage";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Lexend-Regular": require("./assets/fonts/Lexend-Regular.ttf"),
    "Lexend-Medium": require("./assets/fonts/Lexend-Medium.ttf"),
    "Lexend-Bold": require("./assets/fonts/Lexend-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "WorkSans-Regular": require("./assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-Medium": require("./assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Bold": require("./assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-Black": require("./assets/fonts/WorkSans-Black.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "BeVietnamPro-Regular": require("./assets/fonts/BeVietnamPro-Regular.ttf"),
    "BeVietnamPro-Medium": require("./assets/fonts/BeVietnamPro-Medium.ttf"),
    "BeVietnamPro-Bold": require("./assets/fonts/BeVietnamPro-Bold.ttf"),
    "PlusJakartaSans-Regular": require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
    "PlusJakartaSans-Medium": require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
    "PlusJakartaSans-ExtraBold": require("./assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
  });
  const [initialRoute, setInitialRoute] = React.useState("Login");

  React.useEffect(() => {
    checkTokenValidity();
  }, []);

  const checkTokenValidity = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
        if (decodedToken.exp && decodedToken.exp > currentTime) {
          // Token exists and not expired, navigate to Homepage or other authenticated screens
          if (decodedToken?.brandId) {
            setInitialRoute("BrandProfile");
          } else {
            setInitialRoute("UserProfile");
          }
        } else {
          setInitialRoute("Homepage");
        }
      } else {
        setInitialRoute("Homepage");
      }
    } catch (error) {
      console.error("Error checking token:", error);
    }
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <AlertProvider>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName={initialRoute}
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="Homepage"
                component={Homepage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BrandorInfluencer"
                component={BrandorInfluencer}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BrandAccountReviewNotification"
                component={BrandAccountSignupDataPreview}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InfluencerConfirmAccount"
                component={InfluencerConfirmAccount}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BrandRegistrationForm"
                component={BrandRegistrationForm}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InfluencerSocialHandles"
                component={AddHandles}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UserProfilePhoto"
                component={UserProfilePhoto}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MaxFollowersNo"
                component={MaxFollowersNo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PricePerPost"
                component={PricePerPost}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OtpVerification"
                component={OtpVerification}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AdminPanel"
                component={AdminPanel}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InfluencerLogoutPage"
                component={InfluencerLogOutPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InfluencerAccountDeletePage"
                component={InfluencerDeleteAccountPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InfluencerContactUsPage"
                component={InfluencerContactUs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InfluencerHelpCenterPage"
                component={InfluencerHelpCenter}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InfluencerManageAccountPage"
                component={InfluencerManageAccount}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InfluencerAccountSuccess"
                component={InfluencerAccountSuccess}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginPage"
                component={LoginPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BrandProfile"
                component={BrandProfile}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="LoginPageBrands"
                component={LoginPageBrand}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="FriendRequestPage"
                component={FriendRequestPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BrandsAssosciated"
                component={BrandAssosciated}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AccountCreatedSuccessfullyNoti"
                component={AccountCreatedSuccessfullyNoti}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FailedPaymentStatus"
                component={FailedPaymentStatus}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Analytics"
                component={Analytics}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InfluencersList"
                component={InfluencersList}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InboxInterface"
                component={InboxInterface}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChatInterface"
                component={ChatInterface}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UserProfile"
                component={UserProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InfluencerRegistrationForm"
                component={InfluencerRegistrationForm}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlanChooseInterface"
                component={PlanChooseInterface}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FilterUI"
                component={FilterUI}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </AlertProvider>
    </>
  );
};
export default App;
