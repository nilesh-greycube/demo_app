import frappe
import re

def validate_customer(doc, method=None):
    name = doc.customer_name

    if(name.isalpha()):
        frappe.msgprint("name is alpha")
    else:
        frappe.throw("name is not valid")


    # def validate_customer():
    #     regex = r"^[a-zA-Z]+$"

    #     if re.fullmatch(regex, name):
    #         print("Yes")
    #     else:
    #         print("no")
    
    # validate_customer()