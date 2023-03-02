process.env.NODE_ENV = "test";

const chai = require("chai");
const expect = chai.expect;

describe("/First Test Collection", function () {
  it("should test two values...", function () {
    // actual test content in here
    let expectedValue = 10;
    let actualValue = 5;

    expect(actualValue).to.be.equal(expectedValue);
  });
});
