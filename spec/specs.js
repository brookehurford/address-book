describe ("Contact", function () {
  it("create a new contact with the given properties", function() {
    var testContact = new Contact("Rita", "Moreno", "Eugene", "Oregon");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.city).to.equal("Eugene");
    expect(testContact.state).to.equal("Oregon");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to a contact", function() {
    var testContact = new Contact("Sherlock", "Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});

describe ("Address", function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("111 Miller St", "Golden", "Colorado");
    expect (testAddress.street).to.equal("111 Miller St");
    expect (testAddress.city).to.equal("Golden");
    expect (testAddress.state).to.equal("Colorado");
  });

  it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("904 SE 20th Ave", "Portland", "Oregon");
    expect(testAddress.fullAddress()).to.equal("904 SE 20th Ave, Portland, Oregon");
    });

});
