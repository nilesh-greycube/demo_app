// Copyright (c) 2026, administrator and contributors
// For license information, please see license.txt

frappe.ui.form.on("Server Side Scripting", {
    refresh(frm){
        frm.add_custom_button("Using frm_call", ()=>{
            frm.call({
                doc: frm.doc,
                method: "frm_call",

            })
        }, "Add Family Member")

        frm.add_custom_button("Using frappe_call", ()=>{
            frappe.call({
                method: "demo_app.programming_module.doctype.client_side_scripting.client_side_scripting.frappe_call",
                args: {
                    dct: frm.doc.doctype,
                    dcn: frm.doc.name
                }
            })
        }, "Add Family Member")
    }
})




// frappe.ui.form.on("Server Side Scripting", {
// 	enabled(frm) {
// 		frappe.call({
// 			method: "demo_app.programming_module.doctype.client_side_scripting.client_side_scripting.frappe_call",
// 			args: {
// 				msg: "Hello",
// 			},
// 			freeze: true,
// 			freeze_message: "Calling frappe_call Method",
//             success: function (r){
//                 console.log("success function")
//             },
//             // always: function(r){
//             //     console.log("always function")
//             // },
// 			// callback: function (r) {
// 			// 	frappe.msgprint(r.message);
// 			// },
// 		});
// 	},
// });

// frappe.ui.form.on("Server Side Scripting", {
// 	enabled(frm) {
// 		frm.call({
// 			doc: frm.doc,
// 			method: "frm_call",
// 			args: {
// 				msg: "Hello",
// 			},
// 			freeze: true,
// 			freeze_message: "Calling frm_call Method",
//             always: function(r){
//                 console.log("always function")
//             },
// 			callback: function (r) {
// 				frappe.msgprint(r.message);

// 				//frappe.msgprint("Server Side Calling Complete")
// 			},
// 		});
// 	},
// });
