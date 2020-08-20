const nuxios = require("./nuxios").default;

describe("GET /id/{docId}/@bo/{adapterName}", () => {
  it("get /id/{docId}/@bo/{adapterName}", async () => {
    const res = await nuxios.get(`/id/${docId}/@bo/${adapterName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /id/{docId}/@bo/{adapterName}", () => {
  it("put /id/{docId}/@bo/{adapterName}", async () => {
    const res = await nuxios.put(`/id/${docId}/@bo/${adapterName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /id/{docId}/@bo/{adapterName}/{docName}", () => {
  it("post /id/{docId}/@bo/{adapterName}/{docName}", async () => {
    const res = await nuxios.post(`/id/${docId}/@bo/${adapterName}/${docName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /id/{docId}/@children/@bo/{adapterName}", () => {
  it("<ul><li>If a document can't be adapted, the resulting item will be null</li><li> This type of call works for every API endpoint that responds DocumentList (@search, @pp ...)</li></ul>", async () => {
    const res = await nuxios.get(`/id/${docId}/@children/@bo/${adapterName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@bo/{adapterName}", () => {
  it("get /path/{docPath}/@bo/{adapterName}", async () => {
    const res = await nuxios.get(`/path/${docPath}/@bo/${adapterName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /path/{docPath}/@bo/{adapterName}", () => {
  it("put /path/{docPath}/@bo/{adapterName}", async () => {
    const res = await nuxios.put(`/path/${docPath}/@bo/${adapterName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /path/{docPath}/@bo/{adapterName}/{docName}", () => {
  it("post /path/{docPath}/@bo/{adapterName}/{docName}", async () => {
    const res = await nuxios.post(`/path/${docPath}/@bo/${adapterName}/${docName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@children/@bo/{adapterName}", () => {
  it("<ul><li>If a document can't be adapted, the resulting item will be null</li><li> This type of call works for every API endpoint that responds DocumentList (@search, @pp ...)</li></ul>", async () => {
    const res = await nuxios.get(`/path/${docPath}/@children/@bo/${adapterName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
