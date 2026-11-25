# Copyright (c) 2026, administrator and contributors
# For license information, please see license.txt

# import frappe


def execute(filters=None):
	columns, data = [], []

	columns = get_columns()

	return columns, data


def get_columns():
	return [
		{
			"fieldname" : "name",
			"fieldtype" : "Link",
			"label" : "Item Code"
		}
	]