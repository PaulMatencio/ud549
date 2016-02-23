// jasmine.getEnv().defaultTimeoutInterval = 5000;

function  AddressBook() {
	this.Contact = [];
	this.initialComplete = false;
};

AddressBook.prototype.getInitialContacts = function() {
	var self = this;
	setTimeout(function() {
		self.initialComplete = true;

		if (cb) {
			return cb();
		}

	},3);

}

AddressBook.prototype.addContact = function(contact) {
	this.Contact.push(contact);
};

AddressBook.prototype.deleteContact = function(index) {
	this.Contact.splice(index,1);
};

AddressBook.prototype.getContact = function(index) {
	return this.Contact[index];
};

