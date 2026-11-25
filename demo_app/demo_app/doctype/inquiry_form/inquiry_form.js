// Copyright (c) 2026, administrator and contributors
// For license information, please see license.txt

frappe.ui.form.on("Inquiry Form", {
    onload(frm) {
        // frappe.ui.keys.add_shortcut({
        //     shortcut: 'enter',
        //     action: () => frappe.msgprint(__('Order Shortcut!')),
        //     description: __('Custom Action'),
        //     page: frm.page,
        //     ignore_inputs: true
        // });

        $('body').on('keydown', 'input, select', function (e) {
            if (e.key === "Enter") {
                var self = $(this), form = self.parents('form:eq(0)'), focusable, next;

                focusable = form.find('input,a,select,button,textarea').filter(':visible');
                next = focusable.eq(focusable.index(this) + 1);
                if (next.length) {
                    next.focus();
                } else {
                    // form.submit();
                }
                return false;
            }
        });
    },
});
