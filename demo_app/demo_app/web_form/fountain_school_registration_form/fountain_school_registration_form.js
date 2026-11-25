
frappe.ready(function (){

	// change property of field based on value select of school field
	frappe.web_form.on("current_school_nameif_applicable", (field, value)=>{
		// value = frappe.web_form.get_value("current_school_nameif_applicable")
		if(value == "Other"){
			frappe.web_form.set_df_property("school_name", "hidden", "0");
		}
	})

	// Adding new fields when check add new child
	frappe.web_form.on("do_you_wish_to_apply_for_2nd_child", (field, value)=>{
		if(value == 1){
			frappe.web_form.add_fields([
				{
					"fieldname": "other_child_details",
					"fieldtype": "Section Break",
					"label": "Other Child Details",
				},
				{
					"fieldname": "added_second_child",
					"fieldtype": "Data",
					"label": "Added Second Child",
				}
			])
		}
	})
	
	// Adding Custom Hello Button
	$(".title .web-form-actions").prepend("<button id='hello-btn'>Hello</button>")
	let hello_btn = $("#hello-btn")
	hello_btn.css({
		"border":"none",
		"border-radius":"8px",
		"color":"#383838"
	})

	let urlParams = new URLSearchParams(window.location.search)
	let p_num = urlParams.get("primary_number")
	
	hello_btn.click(()=>{
		get_values(p_num)
		submit_form(p_num)
	})


	// for submitting form

	// frappe.web_form.validate = ()=>{
	// 	submit_form(p_num)
	// }


})

const submit_form = (p_num)=>{
	
	// initialise a list which contains all name:value pairs of webform
	let webform_field_value_list = {}
	let wf_all_fields = frappe.web_form.fields

	for (let key in wf_all_fields){
		let webform_field_name = wf_all_fields[key]["fieldname"]
		let webform_field_value = frappe.web_form.get_value(webform_field_name)

		webform_field_value_list[webform_field_name] = webform_field_value
	}
	console.log(webform_field_value_list)



	frappe.call({
			method: "demo_app.demo_app.web_form.fountain_school_registration_form.fountain_school_registration_form.save_doc",
			args:{
				"p_num": p_num,
				"wf_name_value" : webform_field_value_list
			},
			callback: function (r){
				let inq_doc = r.message
				let wf_all_fields = frappe.web_form.fields
				
				console.log(inq_doc)
				console.log(wf_all_fields)

				// for (dkey in doc){
				// 	for(wfkey in wf_field){
				// 		if(dkey == wf_field[wfkey]["fieldname"]){
				// 			let doc_field = dkey
				// 			let doc_value = doc[dkey]
				// 			let form_field = wf_field[wfkey]["fieldname"]
				// 			let form_value = frappe.web_form.get_value(form_field)

				// 			frappe.db.set_value("Inquiry Form", pnum, doc_field, form_value)
				// 		}
				// 	}
				// }

			}
		})
}


const get_values = (p_num)=>{

	// frappe.web_Form.refresh()

	frappe.call({
		method: "demo_app.demo_app.web_form.fountain_school_registration_form.fountain_school_registration_form.get_doc",
		args:{
			"p_num": p_num
		},
		callback: function (r){
			// console.log(r.message)
			let doc = r.message
			let wf = frappe.web_form.fields

			for (dkey in doc){
				for(wfkey in wf){
					// console.log(dkey, " ", wf[fkey])
					if(dkey == wf[wfkey]["fieldname"]){
						let doc_field = dkey
						let doc_value = doc[dkey]
						let form_field = wf[wfkey]["fieldname"]


						frappe.web_form.set_value(form_field, doc_value)
					}
				}
			}

		}
	})
}





// frappe.ready(function() {
// 	let source = getQueryParam('source');
// 	frappe.web_form.set_value('source', source);
// 	frappe.web_form.refresh_fields(['source']);
//         // I would suggest you make your field visible by default and hide it after setting the value.
//         frappe.web_form.set_df_property('source', 'read_only', 1);
// });
// function getQueryParam(param) {
// 	let urlParams = new URLSearchParams(window.location.search);
// 	return urlParams.get(param);
// }












	// hello_btn.click(()=>{
	// 	event.preventDefault();
	// 	frappe.msgprint("hello btn clicked!")
	// 	console.log(frappe.web_form.current_section)
	// 	// frappe.web_form.current_section = 0
	// 	// console.log(frappe.web_form.current_section)
	// })





// frappe.init_client_script = () => {
// 	frappe.web_form.after_load = ()=>{

// 		let phone = frappe.web_form.get_value("primary_number")

// 		console.log(phone)

// 		// let doc = frappe.get_doc("Inquiry Form", phone)

// 		// for (let wf in frappe.web_form.fields){
// 		// 	for(let df in doc.fields)
// 		// 		console.log(wf, df)
// 		// }
// 	}
// }




















// frappe.ready(function() {
// 	// bind events here
// 	frappe.web_form.after_load = () => {
//  		frappe.msgprint('Please fill all values carefully');
// 		console.log("hello")
// 	}
// })

// frappe.ready(function() {
// 	frappe.web_form.refresh = () => {
// 		// frappe.msgprint('Please fill all values carefully');
// 		console.log("hello")
// 	}
	
// 	// const hello = function (){
// 	// 	frappe.web_form.on('my_field_name', (field, value) => {
// 	// 		console.log(field, value)
// 	// 	})
// 	// }
// })


// frappe.ready(function() {
//     frappe.web_form.after_load = () => {
//         frappe.web_form.on('my_field_name', (field, value) => {
//             console.log(field, value)
//         })
//     }
// })

// frappe.ready(function() {
//     frappe.web_form.after_load = () => {
//         frappe.web_form.on('fieldname', (field, value) => {
//             console.log(field, value)
//         })
//     }

// frappe.web_form.on("city_for_admission", (field, value)=>{
// 	console.log("frappe.web_form.on --> city_for_admission")
// 	console.log(field, value)

// 	value = frappe.web_form.get_value("city_for_admission");
// 	console.log(value)
// })

// frappe.web_form.validate = () =>{
// 	console.log("web_form.validate")
// 	return true
// }

// frappe.web_form.after_load = () => {
// 	frappe.msgprint('Please fill all values carefully');
// 	console.log("Please fill all values carefully")
// }



// })



// console.log("hello")