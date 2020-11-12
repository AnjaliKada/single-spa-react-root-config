import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@mf-react/login",
  () => System.import("@mf-react/login"),
  isActive.login,
  { domElement: document.getElementById('login-container') }
);

registerApplication(
  "@mf-react/home",
  () => System.import("@mf-react/home"),
  isActive.home,
  { domElement: document.getElementById('page-1-container') }
);

registerApplication(
  "@mf-react/about",
  () => System.import("@mf-react/about"),
  isActive.about,
  { domElement: document.getElementById('page-2-container') }
);



start();

