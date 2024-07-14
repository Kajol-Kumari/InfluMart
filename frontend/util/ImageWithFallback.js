import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';

const ImageWithFallback = ({ image, imageStyle }) => {
  const [imageSource, setImageSource] = useState({ uri: image });
  const [imageLoaded, setImageLoaded] = useState(true);
  const fallbackImages = [
    require('../assets/influencer1.jpg'),
    require('../assets/influencer2.jpg'),
    require('../assets/influencer3.jpg'),
    require('../assets/influencer4.jpg'),
    require('../assets/influencer5.jpg'),
    require('../assets/influencer6.jpg'),
    require('../assets/influencer7.jpg'),
    require('../assets/influencer8.jpg'),
    require('../assets/influencer9.jpg'),
    require('../assets/influencer10.jpg'),
  ];
  useEffect(()=>{
    if(!image || image == null || image == undefined){
        handleError()
    }else if(!isNaN(image)){
        handleError()
    }
  },[image])

  const handleError = () => {
    const randomFallbackImage = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    setImageSource(randomFallbackImage);
    setImageLoaded(false);
  };

  return (
    <Image
      source={imageSource}
      onError={handleError}
      style={imageStyle}
      contentFit="cover"
      resizeMode='cover'
    />
  );
};

export default ImageWithFallback;
