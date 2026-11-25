frappe.ready(function() {
	// bind events here

	// frappe.web_form.after_load = ()=>{
	// 	console.log("hello")
	// 	frappe.msgprint("please fill all details carefully")
	// }

	frappe.web_form.on("enabled", (field, value)=>{
		frappe.msgprint("Hi User!")
	})
	
	frappe.web_form.on("dob", (field, value)=>{
		if(value){
			dob = new Date(value)
			let today = new Date()
			let age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000))
			frappe.web_form.set_value("age", age)
		}
	})

	frappe.web_form.validate = ()=>{
		console.log("Web Form Validated")
		// frappe.throw("Web Form Validated")
		return false
	}
})