function transformFB(inputData) {
  let transformedData = {
    fbdata: {
      followers: [],
      likes: [],
      trackingData: [],
    },
  };
  inputData.fbData.forEach((item) => {
    transformedData.fbdata.followers.push(item.followers);
    transformedData.fbdata.likes.push(item.likes);
    transformedData.fbdata.trackingData.push(item.trackingData);
  });

  // Padding with zeros if followers or likes contain less than 4 data
  while (transformedData.fbdata.followers.length < 2) {
    transformedData.fbdata.followers.unshift(0);
  }
  while (transformedData.fbdata.likes.length < 2) {
    transformedData.fbdata.likes.unshift(0);
  }
  while (transformedData.fbdata.trackingData.length < 2) {
    transformedData.fbdata.trackingData.unshift(" ");
  }

  return transformedData;
}

function transformYT(inputData) {
  let transformedData = {
    ytdata: {
      videoCount: [],
      viewCount: [],
      subscriberCount: [],
      trackingData: [],
    },
  };
  inputData.ytData.forEach((item) => {
    transformedData.ytdata.subscriberCount.push(item.subscriberCount);
    transformedData.ytdata.videoCount.push(item.videoCount);
    transformedData.ytdata.viewCount.push(item.viewCount);
    transformedData.ytdata.trackingData.push(item.trackingData);
  });

  // Padding with zeros if followers or likes contain less than 4 data
  while (transformedData.ytdata.subscriberCount.length < 2) {
    transformedData.ytdata.subscriberCount.unshift(0);
  }
  while (transformedData.ytdata.videoCount.length < 2) {
    transformedData.ytdata.videoCount.unshift(0);
  }
  while (transformedData.ytdata.viewCount.length < 2) {
    transformedData.ytdata.viewCount.unshift(" ");
  }
  while (transformedData.ytdata.trackingData.length < 2) {
    transformedData.ytdata.trackingData.unshift(" ");
  }

  return transformedData;
}

function transformIG(inputData) {
  let transformedData = {
    instadata: {
      followers: [],
      avgInteractions: [],
      avgER: [],
      avgLikes: [],
      avgComments: [],
      trackingData: [],
    },
  };
  inputData.instaData.forEach((item) => {
    transformedData.instadata.followers.push(item.followers);
    transformedData.instadata.avgComments.push(item.avgComments);
    transformedData.instadata.trackingData.push(item.trackingDate);
    transformedData.instadata.avgER.push(item.avgER*1000);
    transformedData.instadata.avgInteractions.push(item.avgInteractions);
    transformedData.instadata.avgLikes.push(item.avgLikes);
  });

  // Padding with zeros if followers or likes contain less than 4 data
  while (transformedData.instadata.followers.length < 2) {
    transformedData.instadata.followers.unshift(0);
  }
  while (transformedData.instadata.avgComments.length < 2) {
    transformedData.instadata.avgComments.unshift(0);
  }
  while (transformedData.instadata.avgER.length < 2) {
    transformedData.instadata.avgER.unshift(" ");
  }
  while (transformedData.instadata.avgInteractions.length < 2) {
    transformedData.instadata.avgInteractions.unshift(0);
  }
  while (transformedData.instadata.avgLikes.length < 2) {
    transformedData.instadata.avgLikes.unshift(0);
  }
  while (transformedData.instadata.trackingData.length < 2) {
    transformedData.instadata.trackingData.unshift(" ");
  }

  return transformedData;
}

function formatNumber(num) {
  let res;
  if (num >= 1000000) {
    res = (num / 1000000).toFixed(1).toString() + "M";
  } else if (num >= 1000) {
    res = (num / 1000).toFixed(1).toString() + "k";
  } else {
    res = num.toString();
  }
  return res;
}


export { transformFB, transformIG, transformYT,formatNumber };
