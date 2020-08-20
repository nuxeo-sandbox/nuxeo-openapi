const openapi = require("@apidevtools/swagger-parser");
const fs = require("fs");

var Header;
try {
    Header = fs.readFileSync("dev/testTemplate.js", "utf8");
} catch(e) {
    console.log("Error:", e.stack);
}

function testTemplate(action, endp, desc) {
    const ACTION = action.toUpperCase();
    let template = "";
    if (action !== "get" && action !== "delete") {
        template = ", {}";
    }
    let dyno = endp.replace(/{/g, "${");
    return `
describe("${ACTION} ${endp}", () => {
  it("${desc}", async () => {
    const res = await nuxios.${action}(\`${dyno}\`${template});
    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});
`;
}

// First, validate the API
const myAPI = "dist/openapi.yaml";
openapi.validate(myAPI, (err, api) => {
    if (err) {
        console.error(err.toString());
    } else {
        console.log("API name: %s, Version: %s", api.info.title, api.info.version);

        api.tags.forEach((tag, index) => {
            console.log(index + ": " + tag.name);
            let Tag = tag;
            let Filename = "test/" + Tag.name.replace(/\s+/g, "_") + ".test.js";
            fs.writeFileSync(Filename, Header, "utf8");
            // Endpoints
            Object.keys(api.paths).forEach(path => {
                // Methods
                let Endpoint = path;
                let Path = api.paths[path];
                Object.keys(Path).forEach(method => {
                    let Action = method;
                    let Method = Path[method];
                    let Description = Method.description;
                    if (!Description) {
                        Description = Action + " " + Endpoint;
                    }
                    if (Method.tags.includes(Tag.name)) {
                        const tests = testTemplate(Action, Endpoint, Description);
                        fs.appendFileSync(Filename, tests, "utf8");
                    }
                });
            });
            console.log("---");
        });

    }
});


// 5 minute task, I swear