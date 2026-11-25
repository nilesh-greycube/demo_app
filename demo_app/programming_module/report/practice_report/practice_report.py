# Copyright (c) 2026, administrator and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
	columns, data = [], []

	columns = get_columns()
	cs_data = get_cs_data(filters)

	data = []
	for d in cs_data:
		row = frappe._dict({
			"full_name" : d.full_name,
			"standard" : d.standard,
			"ispass" :d.ispass,
			"age" : d.age
		})
		data.append(row)

	return columns, data

def get_columns():
	return [{
		"fieldname" : "full_name",
		"label" : "Full Name",
		"fieldtype" : "Data",
		"width" : "120"
	},
	{
		"fieldname" : "standard",
		"label" : "Standard",
		"fieldtype" : "Select",
		"width" : "120"
	},
	{
		"fieldname" : "ispass",
		"label" : "Result",
		"fieldtype" : "Check",
		"width" : "120"
	}]

def get_cs_data(filters):
	# conditions = get_conditions(filters)
	data = frappe.get_all(
		doctype = "for Report Practice",
		fields = ["full_name", "standard", "ispass"],
		filters = filters			#conditions,
	)
	return data

# def get_conditions(filters):
# 	conditions = {}
# 	for key, value in filters.items():
# 		if filters.get(key):
# 			conditions[key] = value

# 	return conditions
