import axios from "axios";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
export default axios.create({
  baseURL:proxyurl+"https://api.yelp.com/v3/businesses"
  ,
  headers:{
      Authorization:"Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx",
      'Access-Control-Allow-Origin': '*'
  }
});

axios.defaults.xsrfCookieName = 'csrftoken'
                    axios.defaults.xsrfHeaderName = 'X-CSRFToken'