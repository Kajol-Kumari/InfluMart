const axios = require("axios");
const config = require("../config/dbConfig");

const trackingData = () => {
  const now = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonthName = monthNames[now.getMonth()];
  const currentYear = now.getFullYear();
  const formattedDate = `${currentMonthName} ${currentYear}`;
  return formattedDate;
};

//Instagram
const InstagramData = async (instagramId) => {
  const options = {
    method: "GET",
    url: process.env.INSTA_ENDPOINT,
    params: {
      username_or_id: instagramId,
      include_about: "true",
      nocors: "true",
    },
    headers: {
      "x-rapidapi-key": config.X_RAPIDAPI_KEY,
      "x-rapidapi-host": config.X_RAPIDAPI_HOST_INSTA,
    },
  };

  try {
    const response = await axios.request(options);
    const _data = response.data.data;
    const track = trackingData();
    const store = {
      followers: _data.follower_count,
      mediaCount: _data.media_count,
      trackingDate: track,
    };
    return store
  } catch (error) {
    console.log(error);
    return {error:"Somethinng wrong"}
  }
};

//InstagramData("mrbeast");

//yt-api
const YoutubeData = async (youtubeId) => {
  const option = {
    method: "GET",
    url: config.YT_ENDPOINT,
    params: {
      forUsername: youtubeId,
    },
    headers: {
      "x-rapidapi-key": config.X_RAPIDAPI_KEY,
      "x-rapidapi-host": config.X_RAPIDAPI_HOST_YT,
    },
  };

  try {
    const response = await axios.request(option);
    const _data = response.data.meta;
    const track = trackingData()
    const store = {
      subscribers: _data.subscriberCount,
      views: _data.videosCount,
      popularVideo: {},
      trackingData: track,
    };
    const popularVideosListing = response.data.data.find(
      (listing) =>
        listing.type === "video_listing" && listing.title === "Popular videos"
    );
    if (
      popularVideosListing &&
      popularVideosListing.data &&
      popularVideosListing.data.length > 0
    ) {
      let maxViewCount = 0;
      let mostPopularVideo = null;

      popularVideosListing.data.forEach((video) => {
        const viewCount = parseInt(video.viewCount.replace(/,/g, ""), 10); // Remove commas and convert to integer
        if (viewCount > maxViewCount) {
          maxViewCount = viewCount;
          mostPopularVideo = video;
        }
      });

      if (mostPopularVideo) {
        store.popularVideo = {
          videoId: mostPopularVideo.videoId,
          title: mostPopularVideo.title,
          viewCount: mostPopularVideo.viewCount,
        };
      } else {
        console.log('No videos found in the "Popular videos" listing.');
      }
    } else {
      console.log('No "Popular videos" listing found.');
    }
    return store
  } catch (error) {
    console.log(error);
    return {error: `Something wrong${error}`}
  }
};

//YoutubeData("@MrBeast")

//facebook
const facebookData = async (facebookUrl) => {
  const options1 = {
    method: "GET",
    url: config.FB_ENDPOINT,
    params: {
      link: facebookUrl,
    },
    headers: {
      "x-rapidapi-key": config.X_RAPIDAPI_KEY,
      "x-rapidapi-host": config.X_RAPIDAPI_HOST_FB,
    },
  };

  try {
    const response = await axios.request(options1);
    const _data = response.data[0];
    const track = trackingData()
    const store = {
      followers: _data.followers_count,
      likes: _data.likes_count,
      trackingData: track,
    };
    return store
  } catch (error) {
    console.log(error);
    return {error:"something wrong"}
  }
};

//facebookData("https://www.facebook.com/MrBeast6000");

module.exports = {facebookData,YoutubeData,InstagramData,trackingData}


// Facebook
// https://rapidapi.com/ousema.frikha/api/facebook-pages-scraper2/playground/apiendpoint_83045a77-1cfc-47b2-a51c-e9008e6eb5da

// you tube
// https://rapidapi.com/ytjar/api/yt-api/playground/apiendpoint_3d10cfc9-0699-452b-8ed6-eaafb3efafcf

// Instagram
// https://rapidapi.com/mrngstar/api/instagram-scraper-api3/playground/apiendpoint_ef493eb2-bd53-47d9-99e7-b66f292cd959
