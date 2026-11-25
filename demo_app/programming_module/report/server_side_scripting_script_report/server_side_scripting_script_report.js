// Copyright (c) 2026, administrator and contributors
// For license information, please see license.txt

frappe.query_reports["Server Side Scripting Script Report"] = {
	filters: [
		{
			"fieldname" : "dob",
			"label" : "DOB",
			"fieldtype" : "Date",
			// "default" : frappe.datetime.now_date()
		},
		{
			"fieldname" : "age",
			"label" : "Age",
			"fieldtype" : "Data",
		},
		{
			"fieldname" : "age",
			"label" : "Age",
			"fieldtype" : "Link",
			"options" : "Server Side Scripting"
		},
	]
};
