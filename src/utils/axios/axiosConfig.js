import { BASE_URL_DEMO } from "@/routes/urlConfig/apiBaseUrls";
import axios from "axios";

export const apiInstance = axios.create({
  baseURL: BASE_URL_DEMO,
});
