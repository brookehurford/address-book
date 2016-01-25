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

  it("adds the fullAddress method to the contact", function() {
    var testContact = new Contact("Jason", "Awbrey", "Portland", "Oregon");
    expect(testContact.fullAddress()).to.equal("Portland, Oregon");
    });
  });
