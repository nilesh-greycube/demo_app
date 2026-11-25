// Copyright (c) 2026, administrator and contributors
// For license information, please see license.txt

frappe.query_reports["Script Report Server Side Scripting"] = {
	filters: [
		{
			"fieldname" : "name",
			"label" : "Name",
			"fieldtype" : "Link",
			"options" : "Client Side Scripting"
		},
		{
			"fieldname" : "dob",
			"label" : "DOB",
			"fieldtype" : "Date",
			// "default" : frappe.datetime.now_date()
		},
		{
			"fieldname" : "age",
			"label" : "Age",
			"fieldtype" : "Int",
		},
		{
			"fieldname" : "first_name",
			"label" : "First Name",
			"fieldtype" : "Data",
		}	
	]
};
