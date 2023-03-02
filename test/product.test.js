process.env.NODE_ENV = "test";

const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const server = require("../server");

chai.use(chaiHttp);

describe("/First Test Collection", () => {
  it("should test two values...", () => {
    // actual test content in here
    let expectedValue = 10;
    let actualValue = 5;

    expect(actualValue).to.be.equal(expectedValue);
  });
});
