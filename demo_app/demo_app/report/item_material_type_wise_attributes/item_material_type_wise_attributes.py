# Copyright (c) 2026, administrator and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
	if not filters : filter = {}
	columns, data = [], []

	columns = get_columns(filters)
	data = get_data(filters)
	return columns, data, "This is a Message"


def get_columns(filters):
	return [
		{
			"fieldname": "item_code",
			"fieldtype": "Data",
			"label": "Item Code"
		},
		{
			"fieldname": "item_group",
			"fieldtype": "Data",
			"label": "Item Group"
		},
		{
			"fieldname": "material_type",
			"fieldtype": "Data",
			"label": "Material Type"
		},
		{
			"fieldname": "attribute",
			"fieldtype": "Data",
			"label": "Attribute"
		},
		{
			"fieldname": "match_type",
			"fieldtype": "Data",
			"label": "Match Type"
		},
	]

def get_data(filters):

	conditions = ""
	for key, value in filters.items():
		if filters.get(key):
			if key=="item_group":
				conditions += f"AND i.item_group = '{value}'"
			if key=="material_type":
				conditions += f"AND i.custom_material_type = '{value}'"
	
	data = frappe.db.sql(
		f"""

		SELECT
			i.name AS item_code,
			i.item_group AS item_group,
			IFNULL(i.custom_material_type, "-")  AS material_type,
			IFNULL(a.attribute, "-") AS attribute,
			IFNULL(a.match_type, "-") AS match_type
		FROM `tabItem` i
		LEFT JOIN (
			SELECT 
				ma.attribute,
				ma.match_type,
				mt.name
			FROM `tabMaterial Type MW` mt
			LEFT JOIN `tabMaterial Attributes MW` ma
			ON ma.parent = mt.name
		) a
		ON i.custom_material_type = a.name
		WHERE i.disabled = 0 {conditions}

		""", as_dict=1
	)


	return data