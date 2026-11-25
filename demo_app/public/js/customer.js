// // // Name Validation using regex

frappe.ui.form.on("Customer", {
	validate(frm) {
		let name = frm.doc.customer_name;
		let regex = /^[a-zA-Z]+$/;

		if (!regex.test(name)) {
			frappe.throw("Name is not valid");
		}
	},
});







frappe.ui.form.on("Customer", {
	refresh(frm) {
		// frm.trigger("sayHello");
		// sayHello();
		// frappe.msgprint("hello from public customer.js");
		// frm.trigger("validate");
	},
	validate(frm) {
		// frappe.throw("Validate First");
	},
});

function sayHello(frm) {
	// console.log("sayHello function triggered via .trigger()");
}
