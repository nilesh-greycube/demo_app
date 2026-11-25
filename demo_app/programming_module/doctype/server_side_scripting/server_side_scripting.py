# Copyright (c) 2026, administrator and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ServerSideScripting(Document):
	@frappe.whitelist()
	def frm_call(self):
		# frappe.msgprint("msg")
		self.append("family_members", {
			"name1" : "Roy",
			"relation" : "Son",
			"age": 10
		})
		self.save()






	# @frappe.whitelist()
	# def frm_call(self, msg):
	# 	import time
	# 	time.sleep(5)
	# 	# frappe.msgprint(msg)

	# 	# self.mobile_no = 9999999999
	# 	# self.first_name = "Joey"

	# 	return "Hi this message is from frm_call"
























# class ServerSideScripting(Document):

	# def validate(self):
	# 	frappe.msgprint("validate")
    
	# def before_save(self):
	# 	frappe.msgprint("before_save")
	# 	# frappe.throw("before_save error")

	# def before_insert(self):
	# 	# frappe.msgprint("before_insert")
	# 	frappe.throw("before_insert")

	# def after_insert(self):
	# 	frappe.throw("after_insert")

	# def on_update(self):
		# frappe.msgprint("on_update")
		# frappe.throw("update not allowed")
        
	# def before_submit(self):
	# 	frappe.msgprint("before_submit")

	# def on_submit(self):
	# 	frappe.msgprint("on_submit")
    
	# def on_cancel(self):
	# 	frappe.msgprint("on_cancel")

	# def on_trash(seld):
	# 	frappe.msgprint("on_trash")

	# def after_delete(self):
	# 	frappe.msgprint("after_delete")
    
	# def validate(self):
		# full_name = self.first_name + self.middle_name + self.last_name
		# frappe.msgprint(full_name)

		# for row in self.family_members:
		# 	frappe.msgprint(f"Member Name: {row.name1}, Relation: {row.relation}, Age: {row.age}")

		# for list in self.get("family_members"):
		# 	frappe.msgprint(list.name1)

		# def get_document(self):
		# 	doc = frappe.get_doc("Client Side Scripting", self.client_side_doc)
		# 	frappe.msgprint(f"fname: {doc.first_name}, Age: {doc.age}")

		# 	for row in doc.get("family_members"):
		# 		frappe.msgprint(f"{row.name1}, {row.relation}, {row.age}")

		# get_document(self)



		### frappe.new_doc() && doc.insert() && doc.save()

		# def validate(self):
		# 	self.new_document()

		# def new_document(self):

		# 	doc = frappe.new_doc("Client Side Scripting")
		# 	doc.first_name = "Jake"
		# 	doc.last_name = "Jay"
		# 	doc.age = 17
		# 	doc.append("family_members", {
		# 		"name1" : "Rohit",
		# 		"relation" : "Brother",
		# 		"age" : 20
		# 	})

		# 	# doc.insert()
		# 	doc.save()
        
		# def validate(self):
		# 	self.db_set_document()
		
		# def db_set_document(self):
		# 	doc = frappe.get_doc("Client Side Scripting", "PR0027")
		# 	doc.db_set("age", 45)
        



# class ServerSideScripting(Document):
    
# 	def validate(self):
# 		self.sql()


# 	def sql(self):
# 		data = frappe.db.sql("""
# 					   SELECT first_name, age
# 					   FROM `tabClient Side Scripting`
# 					   WHERE enabled=1
# 					    """, as_dict=1)
		
# 		for d in data:
# 			frappe.msgprint(f"fname: {d.first_name}, age: {d.age}")









		# doc_count = frappe.db.count("Client Side Scripting", {"enabled : 1"})
		# frappe.msgprint(f"The enabled document count is: {doc_count}")




		# if frappe.db.exists("Client Side Scripting", "PR0126"):
		# 	frappe.msgprint("Exists")
		# else:
		# 	frappe.msgprint("Doesnt Exist")
    
	# def validate(self):
	# 	self.set_value()
	# 	self.get_value()

	# def get_value(self):
	# 	first_name, age = frappe.db.get_value("Client Side Scripting", "PR0026", ["first_name", "age"])
	# 	frappe.msgprint(f"fname: {first_name}, age: {age}")

	# def set_value(self):
	# 	frappe.db.set_value("Client Side Scripting", "PR0026", "age", 99)
    






	# def validate(self):
	# 	self.get_list()

	# def get_list(self):
	# 	doc = frappe.db.get_list('Client Side Scripting', filters = {'enabled' : 1},fields = ['first_name','age'] )
	# 	for d in doc:
	# 		frappe.msgprint(f"The Parent First Name is {d.first_name} and Age is {d.age}")
