// Copyright (c) 2026, administrator and contributors
// For license information, please see license.txt

frappe.ui.form.on("Client Side Scripting", {
	refresh(frm) {
		// frappe.msgprint("this is a hello message");
		// frappe.throw("This is an error message");
		// frappe.msgprint("Hello from 'refresh' event");
	},
	onload(frm) {
		// frappe.msgprint("from 'onlaod' event");
	},
	validate(frm) {
		// frappe.throw("hello from 'validate' event. Its when we save");
		// frappe.msgprint("msg from 'validate' event."); //Not Working
		// frappe.msgprint({
		// 	title: "Notification",
		// 	indicator: "green",
		// 	message: "Document Saved Successfully!",
		// });
		// frappe.throw("validate");
	},
	before_save(frm) {
		// frappe.throw("hello from 'before_save'. error wont allow us to save doc.");
		// frappe.msgprint("this is message before save"); //Not Working
		// let full_name =
		// 	frm.first_name.toString() + frm.middle_name.toString() + frm.last_name.toString();
		// console.log(full_name);
		// console.log(frm.doc.first_name);
		// frappe.throw(`${frm.doc.first_name} you are saving this document.`);
	},
	after_save(frm) {
		// frappe.throw("hello from 'after_save' event");
		// frappe.msgprint("msg from 'after_save' event");
		// let d = new frappe.ui.Dialog({
		// 	title: "Enter Review",
		// 	fields: [
		// 		{
		// 			label: "Rating",
		// 			fieldname: "rating",
		// 			fieldtype: "Rating",
		// 		},
		// 	],
		// 	size: "small",
		// 	primary_action_label: "Submit",
		// 	primary_action(values) {
		// 		console.log(values);
		// 		d.hide();
		// 	},
		// });
		// d.show();
	},
	enabled(frm) {
		// frappe.msgprint("msg from 'enabled' fieldname event. Enabled checkbox chnaged.");
	},
	age(frm) {
		// frappe.msgprint("age changed");
	},
	family_members_on_form_rendered(frm) {
		// frappe.throw("rendered a new row in child table. event 'child_name_on_rendered'");
	},
	before_submit(frm) {
		// frappe.throw("hello from 'after_save' event. Form Submitted");
		// frappe.msgprint("hello from 'after_save' event. Form Submitted")     //Not Working
	},
	on_submit(frm) {
		// frappe.msgprint("hello from 'on_submit' event. Form is Submitted.");
	},
	before_cancel(frm) {
		// frappe.throw("hello from 'before_cancel' event.");
		// frappe
		// 	.confirm
		// "are you sure you want to cancel?",
		// () => {
		// 	console.log("Cancelled!");
		// },
		// () => {
		// 	frappe.throw("Inturrupted!");
		// },
		// ();
	},
	after_cancel(frm) {
		// frappe.msgprint("hello from 'after_save' event. Form is Cancelled.");
	},

	//
	//
	//
	//
	//

	after_save(frm) {
		// let name = frm.doc.first_name + frm.doc.middle_name + frm.doc.last_name;
		// frm.doc.full_name = name;
		// for (let row of frm.doc.family_members) {
		// 	frappe.msgprint(
		// 		`${row.idx}. The family member name is ${row.name1} and relation is ${row.relation}.`,
		// 	);
		// }
	},

	refresh(frm) {
		// frm.set_intro("Now you can create a new Client Side Scrypting doctype.");
		// if (frm.is_new()) {
		// 	frm.set_intro("This is a new form");
		// }
	},
});

frappe.ui.form.on("Family Members", {
	// name1(frm) {
	// 	frappe.msgprint("hello from Child DocType 'name1' event.");
	// },
	// age(frm, cdt, cdn) {
	// 	// frappe.msgprint("hello from 'age' Child DocType event");
	// 	// console.log(frm); //whole form
	// 	// console.log(cdt); //Child DocType Name
	// 	// console.log(cdn); //Child Doc name --- id
	// 	console.log(frm);
	// 	console.log(frm.selected_doc.name1);
	// 	console.log(frm.selected_doc.relation);
	// 	console.log(frm.selected_doc.age);
	// },
	// age(frm) {
	// 	console.log(frm);
	// 	console.log(frm.selected_doc.name1);
	// 	console.log(frm.selected_doc.relation);
	// 	console.log(frm.selected_doc.age);
	// 	let row = frappe.get_doc(cdt, cdn);
	// 	console.log(row.age);
	// },
});

frappe.ui.form.on("Client Side Scripting", {
	validate(frm) {
		// let name = frm.doc.first_name + " " + frm.doc.middle_name + " " + frm.doc.last_name;
		// frm.set_value("full_name", name);
		// let row = frm.add_child("family_members", {
		// 	name1: "John Doe",
		// 	relation: "Father",
		// 	age: 56,
		// });
	},

	enabled: function (frm) {
		// frm.set_df_property("first_name", "reqd", 1);
		// frm.set_df_property("middle_name", "read_only", 1);
	},

	// refresh: function (frm) {
	// 	frm.add_custom_button(
	// 		"Click Me!",
	// 		() => {
	// 			frappe.msgprint("You clicked button!");
	// 		},
	// 		"Click!",
	// 	);

	// 	frm.add_custom_button(
	// 		"Click Me 2!",
	// 		() => {
	// 			frappe.msgprint("You Clicked Button2");
	// 		},
	// 		"Click!",
	// 	);
	// },
});

frappe.ui.form.on("Client Side Scripting", {
	setup(frm) {
		console.log("setup"); //Triggered Once when we refresh, i.e. form is created
		// frappe.msgprint("from 'setup' event");
	},
	before_load(frm) {
		console.log("before_load");
	},
	onload(frm) {
		console.log("onload");
	},
	refresh(frm) {
		console.log("refresh");
	},
	onload_post_render(frm) {
		console.log("onload_post_render");
	},
	validate(frm) {
		console.log("validate");
	},
	before_save() {
		console.log("before_save");
	},
	after_save() {
		console.log("after_save");
	},
	before_submit() {
		console.log("before_submit");
	},
	on_submit() {
		console.log("on_submit");
	},
	before_cancel() {
		console.log("before_cancel");
	},
	after_cancel() {
		console.log("after_cancel");
	},
	timeline_refresh(frm) {
		console.log("timeline_refresh");
	},
	family_members_on_form_rendered(frm) {
		console.log("when family_members child table's row is opened");
	},
});

frappe.ui.form.on("Family Members", {
	family_members_add(frm) {
		console.log("family_members_add");
	},
	family_members_remove(frm) {
		console.log("family_members_remove");
	},
	before_family_members_remove(frm) {
		console.log("before_family_members_remove");
	},
});