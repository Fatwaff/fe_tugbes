import { get } from "https://bukulapak.github.io/api/process.js";
import { isiDataMahasiswa } from "./controller/edit.js";
import { urlFetchMahasiswa } from "./config/url_get_detil.js";

get(urlFetchMahasiswa, isiDataMahasiswa);
