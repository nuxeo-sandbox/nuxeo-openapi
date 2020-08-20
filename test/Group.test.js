const nuxios = require("./nuxios").default;

describe("POST /group", () => {
  it("post /group", async () => {
    const res = await nuxios.post(`/group`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /group/search", () => {
  it("get /group/search", async () => {
    const res = await nuxios.get(`/group/search`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("DELETE /group/{groupName}", () => {
  it("delete /group/{groupName}", async () => {
    const res = await nuxios.delete(`/group/${groupName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /group/{groupName}", () => {
  it("get /group/{groupName}", async () => {
    const res = await nuxios.get(`/group/${groupName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /group/{groupName}", () => {
  it("put /group/{groupName}", async () => {
    const res = await nuxios.put(`/group/${groupName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /group/{groupName}/@groups", () => {
  it("get /group/{groupName}/@groups", async () => {
    const res = await nuxios.get(`/group/${groupName}/@groups`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /group/{groupName}/@users", () => {
  it("get /group/{groupName}/@users", async () => {
    const res = await nuxios.get(`/group/${groupName}/@users`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /group/{groupName}/user/{userName}", () => {
  it("post /group/{groupName}/user/{userName}", async () => {
    const res = await nuxios.post(`/group/${groupName}/user/${userName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
