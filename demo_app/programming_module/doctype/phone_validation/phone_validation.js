// Copyright (c) 2026, administrator and contributors
// For license information, please see license.txt

frappe.ui.form.on("Phone Validation", {
	refresh(frm) {
		// frm.dirty();
		// console.log(frm.save());
		// console.log(frm.save());
	},

	validate(frm) {
		// let input = frm.doc.phone_number;
		// phone = Number(input);
		// let isValid = input == phone;
		// const validateNumber = function async(valid) {
		// 	if (valid) {
		// 		frm.save();
		// 	} else {
		// 	}
		// };
		// validateNumber(isValid);
		// frm.save().then((res) => {
		// 	console.log(res);
		// });
	},

	after_save(frm) {
		// console.log(frm.save());
	},

	// validate(frm) {
	// 	let input = frm.doc.phone_number;
	// 	phone = Number(input);
	// 	let isValid = input == phone;

	// 	if (!isValid) {
	// 		frappe.msgprint("Invalid Phone Number!!!");
	// 		return Promise.Reject();
	// 	}
	// },
	before_save(frm) {
		let input = frm.doc.phone_number;
		phone = Number(input);
		let isValid = input == phone;

		console.log(frm.save());

		if (!isValid) {
			// frappe.msgprint("Invalid Phone Number!!!");
			return Promise.Reject();
		}
	},
});
