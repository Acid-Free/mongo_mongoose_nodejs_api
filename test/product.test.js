process.env.NODE_ENV = "test";

const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const server = require("../server");

chai.use(chaiHttp);

describe("/First Test Collection", () => {
  it("test default API welcome route...", (done) => {
    chai
      .request(server)
      .get("/api/welcome")
      .end((error, response) => {
        response.should.have.status(200);

        response.body.should.be.a("object");

        const actualValue = response.body.message;

        expect(actualValue).to.be.equal("Welcome to the MEN-REST-API");

        done();
      });
  });

  it("should test two values...", () => {
    // actual test content in here
    let expectedValue = 10;
    let actualValue = 10;

    expect(actualValue).to.be.equal(expectedValue);
  });
});
