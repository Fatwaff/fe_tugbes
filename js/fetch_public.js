import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTabelProyek } from "./controller/getpublic.js";
import { urlAPIproyek } from "./config/url.js";

get(urlAPIproyek, isiTabelProyek);
