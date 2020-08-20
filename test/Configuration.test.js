const nuxios = require("./nuxios").default;
const testOpenAPI = require("jest-openapi");
const path = require("path");

testOpenAPI(path.resolve("dist/openapi.yaml"));

describe("GET /config/types", () => {
  it("get /config/types", async () => {
    const res = await nuxios.get(`/config/types`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /config/types/{docType}", () => {
  it("get /config/types/{docType}", async () => {
    const res = await nuxios.get(`/config/types/${docType}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /config/facets", () => {
  it("get /config/facets", async () => {
    const res = await nuxios.get(`/config/facets`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /config/facets/{facet}", () => {
  it("get /config/facets/{facet}", async () => {
    const res = await nuxios.get(`/config/facets/${facet}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /config/schemas", () => {
  it("get /config/schemas", async () => {
    const res = await nuxios.get(`/config/schemas`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /config/schemas/{schema}", () => {
  it("get /config/schemas/{schema}", async () => {
    const res = await nuxios.get(`/config/schemas/${schema}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
