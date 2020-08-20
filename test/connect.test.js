const path = require("path");
const testOpenAPI = require("jest-openapi");
const nuxios = require("./nuxios").default;

// Load an OpenAPI file (YAML or JSON) into this plugin
testOpenAPI(path.resolve("openapi/openapi.yaml"));

// Write your test
describe("GET /nuxeo/api/v1/me", () => {
  it("should return current user", async () => {

    // Get an HTTP response from your server (e.g. using axios)
    const res = await nuxios.get("/nuxeo/api/v1/me");

    expect(res.status).toEqual(200);

    // Assert that the HTTP response satisfies the OpenAPI spec
    expect(res).toSatisfyApiSpec();
  });
});