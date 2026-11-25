import frappe
import json

def get_context(context):
	# do your magic here

	# print("="*100)
	# print(context)
      
	# primary_number = frappe.form_dict.get("primary_number")

	# print("="*100, primary_number)
	# doc = frappe.get_doc("Inquiry Form", primary_number)
	# print("="*100, doc)

	# context.gender = "Female"

	# doc = doc.as_dict()

	# return(context)
	pass



@frappe.whitelist(allow_guest=True)
def get_doc(p_num):
	# primary_number = frappe.form_dict.get("primary_number")
	# print("="*100, primary_number)
	# print(frappe.form_dict)
      
	doc = frappe.get_doc("Inquiry Form", p_num)
	# print("="*100, doc)
	doc = doc.as_dict()

	# print("="*100, doc)
	# for key, value in doc.items():
	# 	print(key, value)

	return(doc)


@frappe.whitelist()
def save_doc(p_num, wf_name_value):
	print(frappe.get_value("Inquiry Form", p_num, "name"), "="*100)
	wf_name_value = json.loads(wf_name_value)
	print(wf_name_value, type(wf_name_value))