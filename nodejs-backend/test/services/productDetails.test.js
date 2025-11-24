const assert = require("assert");
const app = require("../../src/app");

describe("productDetails service", () => {
  let thisService;
  let productDetailCreated;

  beforeEach(async () => {
    thisService = await app.service("productDetails");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (productDetails)");
  });

  describe("#create", () => {
    const options = {"name":"new value","code":"new value","descrption":"new value"};

    beforeEach(async () => {
      productDetailCreated = await thisService.create(options);
    });

    it("should create a new productDetail", () => {
      assert.strictEqual(productDetailCreated.name, options.name);
assert.strictEqual(productDetailCreated.code, options.code);
assert.strictEqual(productDetailCreated.descrption, options.descrption);
    });
  });

  describe("#get", () => {
    it("should retrieve a productDetail by ID", async () => {
      const retrieved = await thisService.get(productDetailCreated._id);
      assert.strictEqual(retrieved._id, productDetailCreated._id);
    });
  });

  describe("#update", () => {
    let productDetailUpdated;
    const options = {"name":"updated value","code":"updated value","descrption":"updated value"};

    beforeEach(async () => {
      productDetailUpdated = await thisService.update(productDetailCreated._id, options);
    });

    it("should update an existing productDetail ", async () => {
      assert.strictEqual(productDetailUpdated.name, options.name);
assert.strictEqual(productDetailUpdated.code, options.code);
assert.strictEqual(productDetailUpdated.descrption, options.descrption);
    });
  });

  describe("#delete", () => {
  let productDetailDeleted;
    beforeEach(async () => {
      productDetailDeleted = await thisService.remove(productDetailCreated._id);
    });

    it("should delete a productDetail", async () => {
      assert.strictEqual(productDetailDeleted._id, productDetailCreated._id);
    });
  });
});