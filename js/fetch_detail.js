import { get } from "https://bukulapak.github.io/api/process.js";
import { isiDetailProyek } from "./controller/get.js";
import { urlFetchProyek } from "./config/url_get_detil.js";

get(urlFetchProyek, isiDetailProyek);
