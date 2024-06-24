const fetch = require('node-fetch');
const oauth = require('oauth');

// Instagram Verification
const verifyInstagram = async (instagramHandle) => {
  const instagramApiUrl = 'https://graph.instagram.com/me';
  const instagramFields = 'id,username';
  const instagramAccessToken = process.env.INSTAGRAM_ACCESS_TOKEN; 

  try {
    const response = await fetch(`${instagramApiUrl}?fields=${instagramFields}&access_token=${instagramAccessToken}`);
    const data = await response.json();

    if (data.username === instagramHandle) {
      return true;
    }
  } catch (error) {
    console.error('Error verifying Instagram profile:', error);
  }

  return false;
};

// YouTube Verification
const verifyYouTube = async (youtubeChannel) => {
  const googleApiKey = process.env.GOOGLE_API_KEY; 
  const youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/channels';

  try {
    const response = await fetch(`${youtubeApiUrl}?part=snippet&forUsername=${youtubeChannel}&key=${googleApiKey}`);
    const data = await response.json();

    if (data.items.length > 0 && data.items[0].snippet.title.includes(youtubeChannel)) {
      return true;
    }
  } catch (error) {
    console.error('Error verifying YouTube channel:', error);
  }

  return false;
};

// Facebook Verification
const verifyFacebook = async (facebookProfile) => {
  const facebookApiUrl = 'https://graph.facebook.com/v15.0/me';
  const facebookAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const facebookFields = 'id,link';

  try {
    const response = await fetch(`${facebookApiUrl}?fields=${facebookFields}&access_token=${facebookAccessToken}`);
    const data = await response.json();

    if (data.link === `https://www.facebook.com/${facebookProfile}`) {
      return true;
    }
  } catch (error) {
    console.error('Error verifying Facebook profile:', error);
  }

  return false;
};

// Twitter Verification
const verifyTwitter = async (twitterHandle) => {
  const twitterConsumerKey = process.env.TWITTER_CONSUMER_KEY; 
  const twitterConsumerSecret = process.env.TWITTER_CONSUMER_SECRET; 
  const twitterAccessToken = process.env.TWITTER_ACCESS_TOKEN; 
  const twitterAccessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET; 

  const oauthClient = new oauth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    twitterConsumerKey,
    twitterConsumerSecret,
    '1.0A',
    null,
    'HMAC-SHA1'
  );

  try {
    const url = `https://api.twitter.com/1.1/users/show.json?screen_name=${twitterHandle}`;
    const requestData = {
      url,
      method: 'GET',
    };

    oauthClient.get(requestData.url, twitterAccessToken, twitterAccessTokenSecret, (error, data) => {
      if (error) {
        console.error('Error verifying Twitter profile:', error);
        return false;
      }

      const userData = JSON.parse(data);

      if (userData.screen_name === twitterHandle) {
        return true;
      }
    });
  } catch (error) {
    console.error('Error verifying Twitter profile:', error);
  }

  return false;
};

module.exports = {
  verifyInstagram,
  verifyYouTube,
  verifyFacebook,
  verifyTwitter,
};