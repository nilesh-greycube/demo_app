// Copyright (c) 2026, administrator and contributors
// For license information, please see license.txt

frappe.query_reports["Item Material Type Wise Attributes"] = {
	"filters": [
		{
			"fieldname": "item_group",
			"fieldtype": "Link",
			"label": "Item Group",
			"options": "Item Group"
		},
		{
			"fieldname": "material_type",
			"fieldtype": "Link",
			"label": "Material Type",
			"options": "Material Type MW"
		}
	]
};
