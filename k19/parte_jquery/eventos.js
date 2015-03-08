/* evento ready */

$(document).ready(function() {
	console.log("ready")

	/*evento resize*/
	$(window).resize(function() {
		var largura = $(window).width()
		var altura = $(window).height()
		console.log("resize: (" + largura + ", " + altura + ")")
	})

	/* evento scroll */
	$(window).scroll(function() {
		var x = $(window).scrollLeft()
		var y = $(window).scrollTop()
		console.log("scroll: (" + x + ", " + y + ")")
	})

	/* evento focus */
	$("*").focus(function() {
		var tagName = this.tagName
		var id = this.id
		console.log("focus: (" + tagName + ", #" + id + ")")
	})

	/* evento focusin */
	$("*").focusin(function() {
		var tagName = this.tagName
		var id = this.id
		console.log("focusin: (" + tagName + ", #" + id + ")")
	})

	/* evento blur */
	$("*").blur(function() {
		var tagName = this.tagName
		var id = this.id
		console.log("blur: (" + tagName + ", #" + id + ")")
	})

	/* evento focusout */
	$("*").focusout(function() {
		var tagName = this.tagName
		var id = this.id
		console.log("focusout: (" + tagName + ", #" + id + ")")
	})

	/* evento select */
	$("input").select(function() {
		console.log("select: (" + window.getSelection() + ")")
	})

	/* evento change */
	$("input").change(function() {
		console.log("change: (" + $(this).val() + ")")
	})

	/* evento keydown */
	$("input").keydown(function(event) {
		console.log("keydown: (" + event.which + ")")
	})

	/* evento keypress */
	$("input").keypress(function(event) {
		console.log("keypress: (" + event.which + ")")
	})

	/* evento keyup */
	$("input").keyup(function(event) {
		console.log("keyup: (" + event.which + ")")
	})

	/* evento click */
	$("#div1").click(function(event) {
		console.log("click: (" + event.pageX + ", " + event.pageY + ")")
	})

	/* evento dblclick */
	$("#div1").dblclick(function(event) {
		console.log("dblclick: (" + event.pageX + ", " + event.pageY + ")")
	})

	/* evento mousedown */
	$("#div1").mousedown(function(event) {
		console.log("mousedown: (" + event.pageX + ", " + event.pageY + ")")
	})

	/* evento mouseup */
	$("#div1").mouseup(function(event) {
		console.log("mouseup: (" + event.pageX + ", " + event.pageY + ")")
	})

	/* evento mouseenter */
	$("#div1").mouseenter(function(event) {
		console.log("mouseenter: (" + event.pageX + ", " + event.pageY + ")")
	})

	/* evento mouseleave */
	$("#div1").mouseleave(function(event) {
		console.log("mouseleave: (" + event.pageX + ", " + event.pageY + ")")
	})

	/* evento hover */
	$("#div1").hover(function(event) {
		console.log("hover: (" + event.pageX + ", " + event.pageY + ")")
	})

	/* evento mouseover */
	$("#div1").mouseover(function(event) {
		console.log("mouseover: (" + event.pageX + ", " + event.pageY + ")")
	})

	/* evento mouseout */
	$("#div1").mouseout(function(event) {
		console.log("mouseout: (" + event.pageX + ", " + event.pageY + ")")
	})

	/* evento mousemove */
	$("#div1").mousemove(function(event) {
		console.log("mousemove: (" + event.pageX + ", " + event.pageY + ")")
	})
})