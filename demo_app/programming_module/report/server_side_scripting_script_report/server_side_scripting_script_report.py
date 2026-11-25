# Copyright (c) 2026, administrator and contributors
# For license information, please see license.txt

import frappe
from frappe import _, msgprint

def execute(filters=None):
	# if not filters : filters = {}

	data, columns = [], []

	# columns = get_columns()
	# cs_data = get_cs_data(filters)

	# if not cs_data:
	# 	msgprint("No records found")
	# 	return columns, cs_data
	
	# data = []
	# for d in cs_data:
	# 	row = frappe._dict({
	# 		"first_name" : d.first_name,
	# 		"dob" :d.dob,
	# 		"age" : d.age
	# 	})
	# 	data.append(row)

	# chart = get_chart_data(data)
	# report_summary = get_report_summary(data)
	return columns, data




# def get_columns():
# 	return [{
# 			"fieldname" : "first_name",
# 			"label" : "Name",
# 			"fieldtype" : "Data",
# 			"width" : "120"
# 		},
# 		{
# 			"fieldname" : "dob",
# 			"label" : "DOB",
# 			"fieldtype" : "Date",
# 			"width" : "120"
# 		},
# 		{
# 			"fieldname" : "age",
# 			"label" : "Age",
# 			"fieldtype" : "Data",
# 			"width" : "100"
# 		}]

# def get_cs_data(filters):
# 	conditions = get_conditions(filters)
# 	data = frappe.get_all(
# 		doctype = "Server Side Scripting",
# 		fields = ["first_name", "dob", "age"],
# 		filters = conditions,
# 		order_by = "first_name desc"
# 	)
# 	return data

# def get_conditions(filters):
# 	conditions = {}
# 	for key, value in filters.items():
# 		if filters.get(key):
# 			conditions[key] = value

# 	return conditions