function  AddressBook() {
	this.Contact = [];
};

AddressBook.prototype.addContact = function(contact) {
	this.Contact.push(contact);
};

AddressBook.prototype.deleteContact = function(index) {
	this.Contact.splice(index,1);
};

AddressBook.prototype.getContact = function(index) {
	return this.Contact[index];
};

