import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import { AlertProvider } from "./util/AlertContext";
import Chat from './src/components/Chat';

// Import all your screens here
import Homepage from "./screens/Homepage";
import BrandorInfluencer from "./screens/BrandorInfluencer";
import OtpVerification from "./screens/OtpVerification";
import LoginPage from "./screens/login/LoginPage";
import FriendRequestPage from "./screens/FriendRequestPage";
import AccountCreatedSuccessfullyNoti from "./screens/AccountCreatedSuccessfullyNoti";
import FailedPaymentStatus from "./screens/FailedPaymentStatus";
import Analytics from "./screens/Analytics/Analytics";
import InfluencersList from "./screens/InfluencerList/InfluencersList";
import InboxInterface from "./screens/inbox/InboxInterface";
import ChatInterface from "./screens/chat/ChatInterface";
import InfluencerRegistrationForm from "./screens/Influencer/InfluencerRegistrationForm";
import PlanChooseInterface from "./screens/Influencer/PlanChooseInterface";
import LoginPageBrand from "./screens/login/LoginPageBrands";
import BrandAssosciated from "./screens/BrandsAssosciated";
import BrandProfile from "./screens/BrandProfile";
import AdminPanel from "./screens/AdminPanel";
import FilterUI from "./screens/FiltersUI";
import BrandAccountSignupDataPreview from "./screens/BrandAccountSignupDataPreview";
import BrandRegistrationForm from "./screens/signup/BrandRegistrationForm";
import AddHandles from "./screens/Influencer/components/AddHandles";
import PricePerPost from "./screens/Influencer/components/PricePerPost";
import UserProfilePhoto from "./screens/Influencer/components/UserProfilePhoto";
import MaxFollowersNo from "./screens/Influencer/components/MaxFollowersNo";
import InfluencerConfirmAccount from "./screens/Influencer/InfluencerConfirmAccount";
import InfluencerAccountSuccess from "./screens/Influencer/InfluencerAccountSuccess";
import InfluencerLogOutPage from "./screens/Influencer/Settings/InfluencerLogout";
import InfluencerDeleteAccountPage from "./screens/Influencer/Settings/Support/InfluencerDeleteAccount";
import InfluencerContactUs from "./screens/Influencer/Settings/Support/InfluencerContactUs";
import InfluencerHelpCenter from "./screens/Influencer/Settings/Support/InfluencerHelpCenter";
import InfluencerManageAccount from "./screens/Influencer/Settings/InfluencerAccountManage";
import TosScreen from "./screens/TosAndPp/TosScreen";
import PPScreen from "./screens/TosAndPp/PPScreen";
import UserProfile from "./screens/UserProfile/UserProfile";
import BrandAdminPanel from "./screens/Brand/BrandAdminPanel";
import BrandLogOutPage from "./screens/Brand/Settings/BrandLogout";
import BrandDeleteAccountPage from "./screens/Brand/Settings/Support/BrandDeleteAccount";
import BrandManageAccount from "./screens/Brand/Settings/BrandAccountManage";
import ForgotPasswordPage from "./screens/login/ForgotPasswordPage";
import ResetPasswordPage from "./screens/login/ResetPasswordPage";
import { CLIENT_URL } from "@env";
import { SocketContextProvider } from "./util/SocketContext";

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: [CLIENT_URL, "influmart://"],
  config: {
    screens: {
      ResetPassword: "reset-password/:token",
      InfluencerSocialHandles: "api/auth/:platform/success",
    },
  },
};

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [initialRoute, setInitialRoute] = React.useState("Login");

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

  React.useEffect(() => {
    checkTokenValidity();

    const handleDeepLink = ({ url }) => {
      console.log("Received deep link:", url);
    };

    Linking.addEventListener("url", handleDeepLink);

    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log("Initial URL:", url);
      }
    });

    return () => {
      Linking.removeAllListeners("url");
    };
  }, []);

  const checkTokenValidity = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp && decodedToken.exp > currentTime) {
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
    <AlertProvider>
      <SocketContextProvider>
        <NavigationContainer linking={linking}>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName={initialRoute}
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Homepage" component={Homepage} />
              <Stack.Screen name="BrandorInfluencer" component={BrandorInfluencer} />
              <Stack.Screen name="BrandAccountReviewNotification" component={BrandAccountSignupDataPreview} />
              <Stack.Screen name="TosScreen" component={TosScreen} />
              <Stack.Screen name="PPScreen" component={PPScreen} />
              <Stack.Screen name="InfluencerConfirmAccount" component={InfluencerConfirmAccount} />
              <Stack.Screen name="BrandRegistrationForm" component={BrandRegistrationForm} />
              <Stack.Screen name="ResetPassword" component={ResetPasswordPage} />
              <Stack.Screen name="InfluencerSocialHandles" component={AddHandles} />
              <Stack.Screen name="UserProfilePhoto" component={UserProfilePhoto} />
              <Stack.Screen name="MaxFollowersNo" component={MaxFollowersNo} />
              <Stack.Screen name="PricePerPost" component={PricePerPost} />
              <Stack.Screen name="OtpVerification" component={OtpVerification} />
              <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} />
              <Stack.Screen name="AdminPanel" component={AdminPanel} />
              <Stack.Screen name="InfluencerLogoutPage" component={InfluencerLogOutPage} />
              <Stack.Screen name="InfluencerAccountDeletePage" component={InfluencerDeleteAccountPage} />
              <Stack.Screen name="InfluencerContactUsPage" component={InfluencerContactUs} />
              <Stack.Screen name="InfluencerHelpCenterPage" component={InfluencerHelpCenter} />
              <Stack.Screen name="InfluencerManageAccountPage" component={InfluencerManageAccount} />
              <Stack.Screen name="InfluencerAccountSuccess" component={InfluencerAccountSuccess} />
              <Stack.Screen name="LoginPage" component={LoginPage} />
              <Stack.Screen name="BrandProfile" component={BrandProfile} />
              <Stack.Screen name="LoginPageBrands" component={LoginPageBrand} />
              <Stack.Screen name="BrandAdminPanel" component={BrandAdminPanel} />
              <Stack.Screen name="BrandLogoutPage" component={BrandLogOutPage} />
              <Stack.Screen name="BrandAccountDeletePage" component={BrandDeleteAccountPage} />
              <Stack.Screen name="BrandManageAccountPage" component={BrandManageAccount} />
              <Stack.Screen name="FriendRequestPage" component={FriendRequestPage} />
              <Stack.Screen name="BrandsAssosciated" component={BrandAssosciated} />
              <Stack.Screen name="AccountCreatedSuccessfullyNoti" component={AccountCreatedSuccessfullyNoti} />
              <Stack.Screen name="InfluencerRegistrationForm" component={InfluencerRegistrationForm} />
              <Stack.Screen name="PlanChooseInterface" component={PlanChooseInterface} />
              <Stack.Screen name="InfluencerLogOutPage" component={InfluencerLogOutPage} />
              <Stack.Screen name="FilterUI" component={FilterUI} />
              <Stack.Screen name="Analytics" component={Analytics} />
              <Stack.Screen name="InfluencersList" component={InfluencersList} />
              <Stack.Screen name="FailedPaymentStatus" component={FailedPaymentStatus} />
              <Stack.Screen name="InboxInterface" component={InboxInterface} />
              <Stack.Screen name="ChatInterface" component={ChatInterface} />
              <Stack.Screen name="UserProfile" component={UserProfile} />
              <Stack.Screen name="Chat" component={Chat} />
            </Stack.Navigator>
          ) : (
            // Add your SplashScreen component here if you have one
            <SplashScreen />
          )}
        </NavigationContainer>
      </SocketContextProvider>
    </AlertProvider>
  );
};

export default App;
