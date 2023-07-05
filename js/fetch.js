import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTabelProyek, isiTabelMahasiswa, isiTabelDosen } from "./controller/get.js";
import { urlAPIproyek, urlAPImahasiswa, urlAPIdosen } from "./config/url.js";

get(urlAPIproyek, isiTabelProyek);
get(urlAPImahasiswa, isiTabelMahasiswa);
get(urlAPIdosen, isiTabelDosen);
