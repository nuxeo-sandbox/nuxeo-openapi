const nuxios = require("./nuxios").default;

describe("GET /me", () => {
  it("get /me", async () => {
    const res = await nuxios.get(`/me`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /me/changepassword", () => {
  it("put /me/changepassword", async () => {
    const res = await nuxios.put(`/me/changepassword`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /user", () => {
  it("post /user", async () => {
    const res = await nuxios.post(`/user`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /user/search", () => {
  it("get /user/search", async () => {
    const res = await nuxios.get(`/user/search`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("DELETE /user/{userName}", () => {
  it("delete /user/{userName}", async () => {
    const res = await nuxios.delete(`/user/${userName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /user/{userName}", () => {
  it("get /user/{userName}", async () => {
    const res = await nuxios.get(`/user/${userName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /user/{userName}", () => {
  it("put /user/{userName}", async () => {
    const res = await nuxios.put(`/user/${userName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /user/{userName}/group/{groupName}", () => {
  it("post /user/{userName}/group/{groupName}", async () => {
    const res = await nuxios.post(`/user/${userName}/group/${groupName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
