const nuxios = require("./nuxios").default;

describe("GET /id/{docId}/@task", () => {
  it("Only task instance which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/id/${docId}/@task`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@task", () => {
  it("Only task instance which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/path/${docPath}/@task`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /task", () => {
  it("Only task instance which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/task`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /task/{taskId}", () => {
  it("Only task instance which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/task/${taskId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /task/{taskId}/delegate", () => {
  it("See https://doc.nuxeo.com/x/34z1", async () => {
    const res = await nuxios.put(`/task/${taskId}/delegate`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /task/{taskId}/reassign", () => {
  it("See https://doc.nuxeo.com/x/1YcZAQ", async () => {
    const res = await nuxios.put(`/task/${taskId}/reassign`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("PUT /task/{taskId}/{action}", () => {
  it("Complete a workflow related task", async () => {
    const res = await nuxios.put(`/task/${taskId}/${action}`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /id/{docId}/@workflow", () => {
  it("Only workflow instances launched by current user will be returned", async () => {
    const res = await nuxios.get(`/id/${docId}/@workflow`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /id/{docId}/@workflow", () => {
  it("post /id/{docId}/@workflow", async () => {
    const res = await nuxios.post(`/id/${docId}/@workflow`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /path/{docPath}/@workflow", () => {
  it("Only workflow instances launched by current user will be returned", async () => {
    const res = await nuxios.get(`/path/${docPath}/@workflow`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /path/{docPath}/@workflow", () => {
  it("post /path/{docPath}/@workflow", async () => {
    const res = await nuxios.post(`/path/${docPath}/@workflow`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /workflow", () => {
  it("Only workflow instances launched by current user will be returned", async () => {
    const res = await nuxios.get(`/workflow`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("POST /workflow", () => {
  it("post /workflow", async () => {
    const res = await nuxios.post(`/workflow`, {});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("DELETE /workflow/{workflowInstanceId}", () => {
  it("Only workflow instance which you have permission to see will be returned", async () => {
    const res = await nuxios.delete(`/workflow/${workflowInstanceId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /workflow/{workflowInstanceId}", () => {
  it("Only workflow instance which you have permission to see will be returned", async () => {
    const res = await nuxios.get(`/workflow/${workflowInstanceId}`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

describe("GET /workflow/{workflowInstanceId}/graph", () => {
  it("Get the json serialization of a workflow instance graph", async () => {
    const res = await nuxios.get(`/workflow/${workflowInstanceId}/graph`);
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
