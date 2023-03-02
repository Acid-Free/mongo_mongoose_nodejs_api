process.env.NODE_ENV = "test";

const Product = require("../models/product");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const server = require("../server");

chai.use(chaiHttp);

before((done) => {
  Product.deleteMany({}, (err) => {});
  done();
});

after((done) => {
  Product.deleteMany({}, (err) => {});
  done();
});

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

  it("should verify that we have 0 products in the DB", (done) => {
    chai
      .request(server)
      .get("/api/products")
      .end((error, response) => {
        response.should.have.status(200);

        response.body.should.be.a("array");

        response.body.length.should.be.equal(0);

        done();
      });
  });

  it("should POST a valid product", (done) => {
    let product = {
      name: "Test Product 1",
      description: "Test product 1 Description",
      price: 100,
      inStock: true,
    };

    chai
      .request(server)
      .post("/api/products")
      .send(product)
      .end((error, response) => {
        response.should.have.status(201);

        done();
      });
  });

  it("should verify that we have 1 product in the DB", (done) => {
    chai
      .request(server)
      .get("/api/products")
      .end((error, response) => {
        response.should.have.status(200);

        response.body.should.be.a("array");

        response.body.length.should.be.equal(1);

        done();
      });
  });
});
