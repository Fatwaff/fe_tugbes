import { get } from "https://bukulapak.github.io/api/process.js";
import { isiDataProyek } from "./controller/edit.js";
import { urlFetchProyek } from "./config/url_get_detil.js";

get(urlFetchProyek, isiDataProyek);
