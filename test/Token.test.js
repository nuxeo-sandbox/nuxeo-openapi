const nuxios = require("./nuxios").default;

describe("GET /token", () => {
  it("get /token", async () => {
    const res = await nuxios.get(`/token`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /token", () => {
  it("post /token", async () => {
    const res = await nuxios.post(`/token`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("DELETE /token/{token}", () => {
  it("delete /token/{token}", async () => {
    const res = await nuxios.delete(`/token/${token}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
