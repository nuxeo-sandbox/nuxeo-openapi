const nuxios = require("./nuxios").default;

describe("DELETE /id/{docId}", () => {
  it("Only documents which you have permission to see will be returned", async () => {
    const res = await nuxios.delete(`/id/${docId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /id/{docId}", () => {
  it("Only documents which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/id/${docId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /id/{docId}", () => {
  it("post /id/{docId}", async () => {
    const res = await nuxios.post(`/id/${docId}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /id/{docId}", () => {
  it("Only documents which you have permission can be updated. Only the properties part of the document object is taken into account for update", async () => {
    const res = await nuxios.put(`/id/${docId}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("DELETE /repo/{repoId}/id/{docId}", () => {
  it("Only documents which you have permission to see will be returned", async () => {
    const res = await nuxios.delete(`/repo/${repoId}/id/${docId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /repo/{repoId}/id/{docId}", () => {
  it("Only documents which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/repo/${repoId}/id/${docId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /repo/{repoId}/id/{docId}", () => {
  it("post /repo/{repoId}/id/{docId}", async () => {
    const res = await nuxios.post(`/repo/${repoId}/id/${docId}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /repo/{repoId}/id/{docId}", () => {
  it("Only documents which you have permission can be updated. Only the properties part of the document object is taken into account for update", async () => {
    const res = await nuxios.put(`/repo/${repoId}/id/${docId}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("DELETE /path/{docPath}", () => {
  it("Only documents which you have permission can be deleted", async () => {
    const res = await nuxios.delete(`/path/${docPath}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}", () => {
  it("Only documents which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/path/${docPath}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /path/{docPath}", () => {
  it("post /path/{docPath}", async () => {
    const res = await nuxios.post(`/path/${docPath}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /path/{docPath}", () => {
  it("Only documents which you have permission can be updated. Only the properties part of the document object is taken into account for update", async () => {
    const res = await nuxios.put(`/path/${docPath}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("DELETE /repo/{repoId}/path/{docPath}", () => {
  it("Only documents which you have permission to see will be returned", async () => {
    const res = await nuxios.delete(`/repo/${repoId}/path/${docPath}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /repo/{repoId}/path/{docPath}", () => {
  it("Only documents which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/repo/${repoId}/path/${docPath}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /repo/{repoId}/path/{docPath}", () => {
  it("post /repo/{repoId}/path/{docPath}", async () => {
    const res = await nuxios.post(`/repo/${repoId}/path/${docPath}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /repo/{repoId}/path/{docPath}", () => {
  it("Only documents which you have permission can be updated. Only the properties part of the document object is taken into account for update", async () => {
    const res = await nuxios.put(`/repo/${repoId}/path/${docPath}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
