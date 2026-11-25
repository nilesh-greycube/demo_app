// Copyright (c) 2026, administrator and contributors
// For license information, please see license.txt

frappe.query_reports["Item Details"] = {
	"filters": [
		{
			"fieldname" : "name",
			"fieldtype" : "Link",
			"label" : "Name",
			"options" : "Item"
		},
		{
			"fieldname" : "custom_material_type",
			"fieldtype" : "Link",
			"label" : "Material Type",
			"options" : "Material Type MW"
		}
	]
};
