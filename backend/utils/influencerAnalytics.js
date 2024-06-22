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
    method: 'GET',
    url: config.INSTA_ENDPOINT,
    params: {
      url: `https://www.instagram.com/${instagramId}/`
    },
    headers: {
      "x-rapidapi-key": config.X_RAPIDAPI_KEY,
      "x-rapidapi-host": config.X_RAPIDAPI_HOST_INSTA,
    },
  };
  
  try {
    const response = await axios.request(options);
    const data = response.data?.data
    const track = trackingData();
    const store = {
      followers: data?.usersCount,
      avgER: data?.avgER,
      avgInteractions: data?.avgInteractions,
      avgLikes: data?.avgLikes,
      avgComments: data?.avgComments,
      memberCities:data?.membersCities?.slice(0, 5),
      ages: data?.ages,
      genders: data?.genders,
      lastPosts: data?.lastPosts,
      membersReachability: data?.membersReachability,
      tags: data?.tags,
      trackingDate: track,
    };
    return store
  } catch (error) {
    console.log(error);
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
    const _data = response.data?.meta;
    const track = trackingData()
    const store = {
      channelId:_data?.channelId,
      lastPost: [],
      popularVideos: [],
      popularVideo: {},
      trackingData: track,
    };
    const popularVideosListing = response.data?.data?.find(
      (listing) =>
        listing.type === "video_listing" && listing.title === "Popular videos"
    );
    store.lastPost = response.data?.data[1];
    store.popularVideos = popularVideosListing;
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
    const final = await YoutubeStats(store)
    return final
  } catch (error) {
    console.log(error);
    return {error: `Something wrong${error}`}
  }
};

//YoutubeData("@MrBeast")

const YoutubeStats = async (store) =>{
  const options = {
    method: 'POST',
    url: config.YT_STAT_ENDPOINT,
    headers: {
      'x-rapidapi-key': config.X_RAPIDAPI_KEY,
      'x-rapidapi-host': config.X_RAPIDAPI_HOST_YT_STAT,
      'Content-Type': 'application/json'
    },
    data: {
      id: store.channelId,
      part: [
        'general',
        'statistics',
        'content'
      ]
    }
  };
  
  try {
    const response = await axios.request(options);
    const data = response.data
    const final = {...store, videoCount: data?.videoCount,viewCount: data?.viewCount,subscriberCount:data?.subscriberCount}
    return final
  } catch (error) {
    console.error(error);
  }
}

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
      followers: _data?.followers_count,
      likes: _data?.likes_count,
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

// you tube 2
// https://rapidapi.com/dataverse-dataverse-default/api/youtube-data-apis/playground/apiendpoint_e466b510-e081-4f8a-b480-f80aa19c92b3

// Instagram
// https://rapidapi.com/artemlipko/api/instagram-statistics-api/playground/apiendpoint_68509d50-85d1-4dae-8060-92be061602d3
