# import frappe

# def refresh_values():
# 	# primary_number = frappe.form_dict.get("primary_number")

# 	# print("="*100, primary_number)
# 	# print(frappe.form_dict)

# 	# doc = frappe.get_doc("Inquiry Form", primary_number)
# 	# print("="*100, doc)

# 	# doc = doc.as_dict()
# 	# print("="*100, doc)

# 	# for key, value in doc.items():
# 	# 	print(key, value)

# 	return(0)

























# # import frappe
# # from frappe import auth

# # @frappe.whitelist( allow_guest=True )
# # def mobile_login(usr, pwd):
# #     try:
# #         login_manager = frappe.auth.LoginManager()
# #         login_manager.authenticate(user=usr, pwd=pwd)
# #         login_manager.post_login()
# #     except frappe.exceptions.AuthenticationError:
# #         frappe.clear_messages()
# #         frappe.local.response["message"] = {
# #             "success_key":0,
# #             "message":"Authentication Error!"
# #         }

# #         return

# #     api_generate = generate_keys(frappe.session.user)
# #     user = frappe.get_doc('User', frappe.session.user)

# #     frappe.response["message"] = {
# #         "success_key":1,
# #         "message":"Authentication success",
# #         "sid":frappe.session.sid,
# #         "api_key":user.api_key,
# #         "api_secret":api_generate,
# #         "username":user.username,
# #         "email":user.email
# #     }

# # def generate_keys(user):
# #     user_details = frappe.get_doc('User', user)
# #     api_secret = frappe.generate_hash(length=15)

# #     if not user_details.api_key:
# #         api_key = frappe.generate_hash(length=15)
# #         user_details.api_key = api_key

# #     user_details.api_secret = api_secret
# #     user_details.save()

# #     return api_secret

















# # # # import frappe
# # # # from frappe.auth import LoginManager

# # # # @frappe.whitelist(allow_guest=True)
# # # # def mobile_login(usr=None, pwd=None):
# # # #     if not usr or not pwd:
# # # #         frappe.throw("Missing username or password")

# # # #     login_manager = LoginManager()
# # # #     login_manager.authenticate(user=usr, pwd=pwd)
# # # #     login_manager.post_login()

# # # #     user = frappe.get_doc("User", frappe.session.user)

# # # #     # ALWAYS generate a new api_secret on login (so we can return plain text)
# # # #     api_secret = frappe.generate_hash(length=15)
    
# # # #     # Generate API key if not present
# # # #     if not user.api_key:
# # # #         user.api_key = frappe.generate_hash(length=15)
    
# # # #     # Set the new secret
# # # #     user.api_secret = api_secret
# # # #     user.save(ignore_permissions=True)
# # # #     frappe.db.commit()

# # # #     return {
# # # #         "api_key": user.api_key,
# # # #         "api_secret": api_secret,  # ← Return the PLAIN TEXT variable, not user.api_secret
# # # #         "user": user.name,
# # # #         "full_name": user.full_name,
# # # #     }














# # # # # import frappe
# # # # # from frappe.auth import LoginManager

# # # # # @frappe.whitelist(allow_guest=True)
# # # # # def mobile_login(usr=None, pwd=None):
# # # # #     if not usr or not pwd:
# # # # #         frappe.throw("Missing username or password")

# # # # #     login_manager = LoginManager()
# # # # #     login_manager.authenticate(user=usr, pwd=pwd)
# # # # #     login_manager.post_login()

# # # # #     user = frappe.get_doc("User", frappe.session.user)

# # # # #     # generate API keys if not present
# # # # #     if not user.api_key:
# # # # #         user.api_key = frappe.generate_hash(length=15)
# # # # #         user.api_secret = frappe.generate_hash(length=15)
# # # # #         user.save(ignore_permissions=True)

# # # # #     return {
# # # # #         "api_key": user.api_key,
# # # # #         "api_secret": user.api_secret,
# # # # #         "user": user.name,
# # # # #         "full_name": user.full_name,
# # # # #     }