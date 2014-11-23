"use strict"

var modelValidator = require("../dataModelValidator");
var ChaiJS = require("chai");
var expect = ChaiJS.expect;
var dataModel = require("../dataModel");

describe("dataModelValidator", function(){
  it("returns true when passing", function() {
    expect(modelValidator.validateDataModel(dataModel)).to.be.true;
  });
});