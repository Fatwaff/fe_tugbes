import { get } from "https://bukulapak.github.io/api/process.js";
import { isiDataDosen } from "./controller/edit.js";
import { urlFetchDosen } from "./config/url_get_detil.js";

get(urlFetchDosen, isiDataDosen);
