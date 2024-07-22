import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";

const ImageWithFallback = ({ image, imageStyle, isSelectedImage }) => {
  const [imageSource, setImageSource] = useState({ uri: image });
  const [imageLoaded, setImageLoaded] = useState(true);
  const selectedImage = {
    images: {
      avatar1: require("../assets/avatars/avatar1.png"),
      avatar2: require("../assets/avatars/avatar2.png"),
      avatar3: require("../assets/avatars/avatar3.png"),
      avatar4: require("../assets/avatars/avatar4.png"),
      avatar5: require("../assets/avatars/avatar5.png"),
      avatar6: require("../assets/avatars/avatar6.png"),
      avatar7: require("../assets/avatars/avatar7.png"),
      avatar8: require("../assets/avatars/avatar8.png"),
      avatar9: require("../assets/avatars/avatar9.png"),
      avatar10: require("../assets/avatars/avatar10.png"),
      avatar11: require("../assets/avatars/avatar11.png"),
      avatar12: require("../assets/avatars/avatar12.png"),
      avatar13: require("../assets/avatars/avatar13.png"),
      avatar14: require("../assets/avatars/avatar14.png"),
      avatar15: require("../assets/avatars/avatar15.png"),
      avatar16: require("../assets/avatars/avatar16.png"),
      avatar17: require("../assets/avatars/avatar17.png"),
      avatar18: require("../assets/avatars/avatar18.png"),
      avatar19: require("../assets/avatars/avatar19.png"),
      avatar20: require("../assets/avatars/avatar20.png"),
      avatar21: require("../assets/avatars/avatar21.png"),
      avatar22: require("../assets/avatars/avatar22.png"),
      avatar23: require("../assets/avatars/avatar23.png"),
      avatar24: require("../assets/avatars/avatar24.png"),
      avatar25: require("../assets/avatars/avatar25.png"),
      avatar26: require("../assets/avatars/avatar26.png"),
      avatar27: require("../assets/avatars/avatar27.png"),
      avatar28: require("../assets/avatars/avatar28.png"),
    },
  };
  const fallbackImages = [
    require("../assets/influencer1.jpg"),
    require("../assets/influencer2.jpg"),
    require("../assets/influencer3.jpg"),
    require("../assets/influencer4.jpg"),
    require("../assets/influencer5.jpg"),
    require("../assets/influencer6.jpg"),
    require("../assets/influencer7.jpg"),
    require("../assets/influencer8.jpg"),
    require("../assets/influencer9.jpg"),
    require("../assets/influencer10.jpg"),
  ];
  useEffect(() => {
    if (!image || image == null || image == undefined) {
      handleError();
    } else if (!isNaN(image)) {
      handleError();
    } else if (isSelectedImage) {
      setImageSource(selectedImage.images[image]);
    }
  }, [image]);

  const handleError = () => {
    const randomFallbackImage =
      fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    setImageSource(randomFallbackImage);
    setImageLoaded(false);
  };

  return (
    <Image
      source={imageSource}
      onError={handleError}
      style={imageStyle}
      contentFit="cover"
      resizeMode="cover"
    />
  );
};

export default ImageWithFallback;
