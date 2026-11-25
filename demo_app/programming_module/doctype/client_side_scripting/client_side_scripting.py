# Copyright (c) 2026, administrator and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ClientSideScripting(Document):
	pass

@frappe.whitelist()
def frappe_call(dct, dcn):
	d = frappe.get_doc(dct, dcn)
	frappe.msgprint(d.doctype)
	frappe.msgprint(d.name)
	d.append("family_members", {
		"name1" : "Roy",
		"relation" : "Son",
		"age": 10	
	})
	d.save()

















# @frappe.whitelist()
# def frappe_call(msg):
# 	import time
# 	time.sleep(5)
# 	# frappe.msgprint(msg)

# 	return "Hi this message is from frappe_call"