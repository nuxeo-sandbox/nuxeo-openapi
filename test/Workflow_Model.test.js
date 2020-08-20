const nuxios = require("./nuxios").default;

describe("GET /workflowModel", () => {
  it("get /workflowModel", async () => {
    const res = await nuxios.get(`/workflowModel`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /workflowModel/{modelName}", () => {
  it("get /workflowModel/{modelName}", async () => {
    const res = await nuxios.get(`/workflowModel/${modelName}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /workflowModel/{modelName}/graph", () => {
  it("Get the json serialization of a workflow model graph", async () => {
    const res = await nuxios.get(`/workflowModel/${modelName}/graph`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
