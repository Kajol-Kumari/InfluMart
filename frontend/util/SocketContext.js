import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";
//import { API_ENDPOINT } from "@env";
const API_ENDPOINT = "http://localhost:3000";
const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const getData = async () => {
      let id;
      const _influencer = await AsyncStorage.getItem("influencerId");
      const _brand = await AsyncStorage.getItem("brandId");
      if (_influencer) {
        id = _influencer;
      } else if (_brand) {
        id = _brand;
      }
      setAuthUser(id);
    };
    getData();
  }, []);
  useEffect(() => {
    if (authUser) {
      const socket = io(API_ENDPOINT, {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);

      // socket.on() is used to listen to the events. can be used both on client and server side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
        console.log(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
