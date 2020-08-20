const nuxios = require("./nuxios").default;

describe("GET /directory/{directoryName}", () => {
  it("get /directory/{directoryName}", async () => {
    const res = await nuxios.get(`/directory/${directoryName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /directory/{directoryName}", () => {
  it("post /directory/{directoryName}", async () => {
    const res = await nuxios.post(`/directory/${directoryName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("DELETE /directory/{directoryName}/{entryId}", () => {
  it("delete /directory/{directoryName}/{entryId}", async () => {
    const res = await nuxios.delete(`/directory/${directoryName}/${entryId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /directory/{directoryName}/{entryId}", () => {
  it("get /directory/{directoryName}/{entryId}", async () => {
    const res = await nuxios.get(`/directory/${directoryName}/${entryId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /directory/{directoryName}/{entryId}", () => {
  it("put /directory/{directoryName}/{entryId}", async () => {
    const res = await nuxios.put(`/directory/${directoryName}/${entryId}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
