const WS_HOST = window.location.hostname.split(".")[0].slice(0,-5)

export const SETTINGS = {
  CAMERA_FEED_SERVER: "http://localhost:3004",
  CAMERA_FEED_WIDTH: 852,
  MAX_POINTS: 10,
  SLICE_LENGTH: -10,
};

export const HTTP = {
  CAMERA_FEED: `${SETTINGS.CAMERA_FEED_SERVER}/facstream.mjpeg`, // POST
};

export const MQTT = {
  MQTT_SERVER: "ws://localhost:3002",
  TOPICS: {
    CLASS: "class", // class names detected
    SPEEDOMETER: "speedometer", // current speed
  },
};
