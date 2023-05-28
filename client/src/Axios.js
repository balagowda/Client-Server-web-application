import axios from "axios";
import { useState } from "react";

const Axios = (url) => {
  const baseUrl = "http://localhost:8000/";

  const [data, setData] = useState([]);

  axios
    .get(baseUrl + url)
    .then(function (response) {
      // handle success
      setData(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

    return [data];
};

export default Axios;
