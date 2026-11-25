// Copyright (c) 2026, administrator and contributors
// For license information, please see license.txt

frappe.query_reports["Practice Report"] = {
	"filters": [
		{
			"fieldname" : "name",
			"label" : "Name",
			"fieldtype" : "Link",
			"options" : "for Report Practice"
		},
		{
			"fieldname" : "full_name",
			"label" : "Full Name",
			"fieldtype" : "Data",
		},
		{
			"fieldname" : "standard",
			"label" : "Standard",
			"fieldtype" : "Select",
			"options" : [9, 10, 11, 12]
		},
		{
			"fieldname" : "percentage",
			"label" : "Percentage",
			"fieldtype" : "Percent",
		},
		{
			"fieldname" : "house",
			"label" : "House",
			"fieldtype" : "Select",
			"options" : ["Blue", "Green", "Red", "Yellow"]
		},
		{
			"fieldname" : "ispass",
			"label" : "is Pass?",
			"fieldtype" : "Check",
		},
	]
};
