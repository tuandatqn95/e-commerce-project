import axios from "axios";
import { API_URL } from "../constants/config";

export default function callApi(endPoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endPoint}`,
        data: body,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).catch(err => {
        console.log(err);
    });
}
