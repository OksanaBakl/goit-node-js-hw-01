const fs = require("fs/promises");
const path = require("path");

const crypto = require("crypto");

const contactsPath = path.join(__dirname, "/db/contacts.json");

async function getContacts() {
	try {
		const data = await fs.readFile(contactsPath, "utf-8");
		return JSON.parse(data);
	} catch {
		console.error();
	}
}

async function listContacts() {
	try {
		return getContacts();
	} catch {
		console.error();
	}
}

async function getContactById(contactId) {
	try {
		const contacts = await getContacts();
		const [result] = contacts.filter((contact) => contact.id === contactId);
		return result;
	} catch {
		console.error();
	}
}

async function removeContact(contactId) {
	try {
		const contacts = await getContacts();
		const contactsFilter = contacts.filter(
			(contact) => contact.id !== contactId
		);
		await fs.writeFile(contactsPath, JSON.stringify(contactsFilter, null, 2));
		return getContacts();
	} catch {
		console.error();
	}
}

async function addContact(name, email, phone) {
	try {
		const contacts = await getContacts();
		const newContact = { id: crypto.randomUUID(), name, email, phone };
		contacts.push(newContact);
		await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
		return newContact;
	} catch {
		console.error();
	}
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
