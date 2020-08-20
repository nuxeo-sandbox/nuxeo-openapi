const axios = require("axios").default;
const path = require("path");
const testOpenAPI = require("jest-openapi");

/* global: process */
const HOST = process.env.NUXEO_HOST || "localhost";
const PORT = process.env.NUXEO_PORT || "8080";
const PROTOCOL = process.env.NUXEO_PROTOCOL || "http";
const TOKEN = process.env.NUXEO_TOKEN;
const USER = process.env.NUXEO_USER;
const PASS = process.env.NUXEO_PASS;

let HPSEP = "";
if (PORT) {
    HPSEP = ":";
}
const axiosConfig = {
    baseURL: `${PROTOCOL}://${HOST}${HPSEP}${PORT}/nuxeo/api/v1`,
    timeout: 1000
};
if (TOKEN) {
    axiosConfig.headers = {
        "X-Authentication-Token": TOKEN
    };
} else if (USER && PASS) {
    axiosConfig.auth = {
        username: USER,
        password: PASS
    };
}
const nuxios = axios.create(axiosConfig);

// Load an OpenAPI file (YAML or JSON) into this plugin
//testOpenAPI(path.resolve("dist/openapi.yaml"));

module.exports = {
    nuxios,
    axios,
    default: nuxios
};