const nuxios = require("./nuxios").default;

describe("GET /oauth2/client", () => {
  it("get /oauth2/client", async () => {
    const res = await nuxios.get(`/oauth2/client`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /oauth2/client", () => {
  it("post /oauth2/client", async () => {
    const res = await nuxios.post(`/oauth2/client`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("DELETE /oauth2/client/{oauth2ClientId}", () => {
  it("delete /oauth2/client/{oauth2ClientId}", async () => {
    const res = await nuxios.delete(`/oauth2/client/${oauth2ClientId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /oauth2/client/{oauth2ClientId}", () => {
  it("get /oauth2/client/{oauth2ClientId}", async () => {
    const res = await nuxios.get(`/oauth2/client/${oauth2ClientId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /oauth2/client/{oauth2ClientId}", () => {
  it("put /oauth2/client/{oauth2ClientId}", async () => {
    const res = await nuxios.put(`/oauth2/client/${oauth2ClientId}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /oauth2/provider", () => {
  it("get /oauth2/provider", async () => {
    const res = await nuxios.get(`/oauth2/provider`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /oauth2/provider", () => {
  it("post /oauth2/provider", async () => {
    const res = await nuxios.post(`/oauth2/provider`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /oauth2/provider/{oauth2ProviderId}", () => {
  it("get /oauth2/provider/{oauth2ProviderId}", async () => {
    const res = await nuxios.get(`/oauth2/provider/${oauth2ProviderId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /oauth2/provider/{oauth2ProviderId}", () => {
  it("put /oauth2/provider/{oauth2ProviderId}", async () => {
    const res = await nuxios.put(`/oauth2/provider/${oauth2ProviderId}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /oauth2/provider/{oauth2ProviderId}/token", () => {
  it("get /oauth2/provider/{oauth2ProviderId}/token", async () => {
    const res = await nuxios.get(`/oauth2/provider/${oauth2ProviderId}/token`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /oauth2/token", () => {
  it("get /oauth2/token", async () => {
    const res = await nuxios.get(`/oauth2/token`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /oauth2/token/client", () => {
  it("get /oauth2/token/client", async () => {
    const res = await nuxios.get(`/oauth2/token/client`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("DELETE /oauth2/token/client/{oauth2ClientId}/user/{userName}", () => {
  it("delete /oauth2/token/client/{oauth2ClientId}/user/{userName}", async () => {
    const res = await nuxios.delete(`/oauth2/token/client/${oauth2ClientId}/user/${userName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /oauth2/token/client/{oauth2ClientId}/user/{userName}", () => {
  it("get /oauth2/token/client/{oauth2ClientId}/user/{userName}", async () => {
    const res = await nuxios.get(`/oauth2/token/client/${oauth2ClientId}/user/${userName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /oauth2/token/client/{oauth2ClientId}/user/{userName}", () => {
  it("put /oauth2/token/client/{oauth2ClientId}/user/{userName}", async () => {
    const res = await nuxios.put(`/oauth2/token/client/${oauth2ClientId}/user/${userName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /oauth2/token/provider", () => {
  it("get /oauth2/token/provider", async () => {
    const res = await nuxios.get(`/oauth2/token/provider`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("DELETE /oauth2/token/provider/{oauth2ProviderId}/user/{userName}", () => {
  it("delete /oauth2/token/provider/{oauth2ProviderId}/user/{userName}", async () => {
    const res = await nuxios.delete(`/oauth2/token/provider/${oauth2ProviderId}/user/${userName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /oauth2/token/provider/{oauth2ProviderId}/user/{userName}", () => {
  it("get /oauth2/token/provider/{oauth2ProviderId}/user/{userName}", async () => {
    const res = await nuxios.get(`/oauth2/token/provider/${oauth2ProviderId}/user/${userName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /oauth2/token/provider/{oauth2ProviderId}/user/{userName}", () => {
  it("put /oauth2/token/provider/{oauth2ProviderId}/user/{userName}", async () => {
    const res = await nuxios.put(`/oauth2/token/provider/${oauth2ProviderId}/user/${userName}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /oauth2/token/search", () => {
  it("get /oauth2/token/search", async () => {
    const res = await nuxios.get(`/oauth2/token/search`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /oauth2/token/{oAuth2TokenType}", () => {
  it("get /oauth2/token/{oAuth2TokenType}", async () => {
    const res = await nuxios.get(`/oauth2/token/${oAuth2TokenType}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
