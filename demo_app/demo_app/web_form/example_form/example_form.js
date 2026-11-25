frappe.ready(function () {
	// bind events here

	let btn_next = $(".btn-next")
	let list = []
	// btn_next.on("click", (e) => {
	// 	// event.preventDefault()
	// 	// event.stopPropagation()
	// 	// console.log(e)

	// 	console.log(frappe.web_form.page)
	// 	list.push(frappe.web_form.page)


	// })

	frappe.web_form.$next_button.on("click", (e) => {
		// $slide_progress element which has active success and normal states
		let slide_progress = frappe.web_form.$slide_progress[0]
		console.log(slide_progress)
		console.log(typeof (slide_progress))

		// count of all child elements -> total no. of pages
		let total_pages = slide_progress.childElementCount
		console.log(total_pages)

		// list of all child elemets (slide-steps) -> is object --> 0: child1, 1: child2, ... etc
		let pages_node_list = slide_progress.childNodes
		console.log(pages_node_list)
		console.log(typeof (pages_node_list))

		// slide-step active
		for (let i in pages_node_list) {
			// if (typeof (parseInt(i)) == "number" && parseInt(i)) 
			try {
				let c = pages_node_list[i].className
				console.log(c.includes("active"))
			} catch (e) {
				console.log(e)
			}
		}

		let pages_html_list = slide_progress.children
		console.log(pages_html_list)
		console.log(typeof (pages_html_list))
	})
	frappe.web_form.$previous_button.on("click", (e) => {
		let total_pages = frappe.web_form.$slide_progress.childElementCount
		console.log(total_pages)

		let pages_node_list = frappe.web_form.$slide_progress.childNodes
		console.log(pages_node_list)
		console.log(typeof (pages_node_list))

		let pages_html_list = frappe.web_form.$slide_progress.childNodes
		console.log(pages_html_list)
		console.log(typeof (pages_html_list))
	})
	frappe.web_form.$slide_progress.on("click", (e) => {
		console.log("Slide Progress")
		console.log(e)
	})

})