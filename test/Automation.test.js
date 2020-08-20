const nuxios = require("./nuxios").default;

describe("GET /automation", () => {
  it("get /automation", async () => {
    const res = await nuxios.get(`/automation`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /automation/{operationName}", () => {
  it("get /automation/{operationName}", async () => {
    const res = await nuxios.get(`/automation/${operationName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /automation/{operationName}", () => {
  it("post /automation/{operationName}", async () => {
    const res = await nuxios.post(`/automation/${operationName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /path/{docPath}/@children/@op/{operationName}", () => {
  it("This works on every API endpoint that return DocumentList", async () => {
    const res = await nuxios.post(`/path/${docPath}/@children/@op/${operationName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /path/{docPath}/@op/{operationName}", () => {
  it("post /path/{docPath}/@op/{operationName}", async () => {
    const res = await nuxios.post(`/path/${docPath}/@op/${operationName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
