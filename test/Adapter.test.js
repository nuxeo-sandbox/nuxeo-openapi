const nuxios = require("./nuxios").default;

describe("GET /id/{docId}/@acl", () => {
  it("get /id/{docId}/@acl", async () => {
    const res = await nuxios.get(`/id/${docId}/@acl`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@acl", () => {
  it("get /path/{docPath}/@acl", async () => {
    const res = await nuxios.get(`/path/${docPath}/@acl`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /id/{docId}/@annotation", () => {
  it("get /id/{docId}/@annotation", async () => {
    const res = await nuxios.get(`/id/${docId}/@annotation`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /id/{docId}/@annotation", () => {
  it("put /id/{docId}/@annotation", async () => {
    const res = await nuxios.put(`/id/${docId}/@annotation`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("DELETE /id/{docId}/@annotation/{annotationId}", () => {
  it("delete /id/{docId}/@annotation/{annotationId}", async () => {
    const res = await nuxios.delete(`/id/${docId}/@annotation/${annotationId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /id/{docId}/@annotation/{annotationId}", () => {
  it("get /id/{docId}/@annotation/{annotationId}", async () => {
    const res = await nuxios.get(`/id/${docId}/@annotation/${annotationId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /id/{docId}/@audit", () => {
  it("get /id/{docId}/@audit", async () => {
    const res = await nuxios.get(`/id/${docId}/@audit`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@audit", () => {
  it("get /path/{docPath}/@audit", async () => {
    const res = await nuxios.get(`/path/${docPath}/@audit`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /id/{docId}/@blob/{fieldPath}", () => {
  it("get /id/{docId}/@blob/{fieldPath}", async () => {
    const res = await nuxios.get(`/id/${docId}/@blob/${fieldPath}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@blob/{fieldPath}", () => {
  it("get /path/{docPath}/@blob/{fieldPath}", async () => {
    const res = await nuxios.get(`/path/${docPath}/@blob/${fieldPath}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /id/{docId}/@children", () => {
  it("Only documents which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/id/${docId}/@children`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@children", () => {
  it("Only documents which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/path/${docPath}/@children`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /id/{docId}/@blob/{blobXpath}/@convert", () => {
  it("One of the 'name', 'type' or 'format' parameters must be passed.", async () => {
    const res = await nuxios.get(`/id/${docId}/@blob/${blobXpath}/@convert`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /id/{docId}/@convert", () => {
  it("One of the 'name', 'type' or 'format' parameters must be passed.", async () => {
    const res = await nuxios.get(`/id/${docId}/@convert`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@blob/{blobXpath}/@convert", () => {
  it("One of the 'name', 'type' or 'format' parameters must be passed.", async () => {
    const res = await nuxios.get(`/path/${docPath}/@blob/${blobXpath}/@convert`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@convert", () => {
  it("One of the 'name', 'type' or 'format' parameters must be passed.", async () => {
    const res = await nuxios.get(`/path/${docPath}/@convert`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /@emptyWithDefault", () => {
  it("To retrieve all initialized properties, the 'properties: *' header must be used", async () => {
    const res = await nuxios.get(`/@emptyWithDefault`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /id/{docId}/@emptyWithDefault", () => {
  it("To retrieve all initialized properties, the 'properties: *' header must be used", async () => {
    const res = await nuxios.get(`/id/${docId}/@emptyWithDefault`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@emptyWithDefault", () => {
  it("To retrieve all initialized properties, the 'properties: *' header must be used", async () => {
    const res = await nuxios.get(`/path/${docPath}/@emptyWithDefault`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

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

describe("GET /id/{docId}/@rendition/{renditionName}", () => {
  it("get /id/{docId}/@rendition/{renditionName}", async () => {
    const res = await nuxios.get(`/id/${docId}/@rendition/${renditionName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@rendition/{renditionName}", () => {
  it("get /path/{docPath}/@rendition/{renditionName}", async () => {
    const res = await nuxios.get(`/path/${docPath}/@rendition/${renditionName}`);
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
