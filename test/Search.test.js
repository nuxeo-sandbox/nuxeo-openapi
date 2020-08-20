const nuxios = require("./nuxios").default;

describe("GET /id/{docId}/@pp/{pageProviderName}", () => {
  it("Only documents which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/id/${docId}/@pp/${pageProviderName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@pp/{pageProviderName}", () => {
  it("Only documents which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/path/${docPath}/@pp/${pageProviderName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /query", () => {
  it("You can have also named parameters in the query. See http://doc.nuxeo.com/x/qAc5AQ", async () => {
    const res = await nuxios.get(`/query`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /query/{providerName}", () => {
  it("You can have also named parameters in the query. See http://doc.nuxeo.com/x/qAc5AQ", async () => {
    const res = await nuxios.get(`/query/${providerName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /search/lang/{queryLanguage}/bulk/{actionId}", () => {
  it("You can have also named parameters in the query. See http://doc.nuxeo.com/x/qAc5AQ", async () => {
    const res = await nuxios.post(`/search/lang/${queryLanguage}/bulk/${actionId}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /search/lang/{queryLanguage}/execute", () => {
  it("You can have also named parameters in the query. See http://doc.nuxeo.com/x/qAc5AQ", async () => {
    const res = await nuxios.get(`/search/lang/${queryLanguage}/execute`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /search/pp/{providerName}", () => {
  it("get /search/pp/{providerName}", async () => {
    const res = await nuxios.get(`/search/pp/${providerName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /search/pp/{providerName}/bulk/{actionId}", () => {
  it("You can have also named parameters in the query. See http://doc.nuxeo.com/x/qAc5AQ", async () => {
    const res = await nuxios.post(`/search/pp/${providerName}/bulk/${actionId}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /search/pp/{providerName}/execute", () => {
  it("You can have also named parameters in the query. See http://doc.nuxeo.com/x/qAc5AQ", async () => {
    const res = await nuxios.get(`/search/pp/${providerName}/execute`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /search/saved", () => {
  it("get /search/saved", async () => {
    const res = await nuxios.get(`/search/saved`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /search/saved", () => {
  it("post /search/saved", async () => {
    const res = await nuxios.post(`/search/saved`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("DELETE /search/saved/{searchId}", () => {
  it("delete /search/saved/{searchId}", async () => {
    const res = await nuxios.delete(`/search/saved/${searchId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /search/saved/{searchId}", () => {
  it("get /search/saved/{searchId}", async () => {
    const res = await nuxios.get(`/search/saved/${searchId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /search/saved/{searchId}", () => {
  it("put /search/saved/{searchId}", async () => {
    const res = await nuxios.put(`/search/saved/${searchId}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /search/saved/{searchId}/bulk/{actionId}", () => {
  it("post /search/saved/{searchId}/bulk/{actionId}", async () => {
    const res = await nuxios.post(`/search/saved/${searchId}/bulk/${actionId}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /search/saved/{searchId}/execute", () => {
  it("get /search/saved/{searchId}/execute", async () => {
    const res = await nuxios.get(`/search/saved/${searchId}/execute`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /id/{docId}/@search", () => {
  it("Only documents which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/id/${docId}/@search`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@search", () => {
  it("Only documents which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/path/${docPath}/@search`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
