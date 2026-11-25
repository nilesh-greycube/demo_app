import frappe


def add_marks():
    list = frappe.db.get_all("Server Side Scripting", fields=["marks"], filters={})
    sum = 0
    for l in list:
        sum += int(l.marks)
    
    return sum