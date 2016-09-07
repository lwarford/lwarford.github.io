
function onReady() {
	$(".node").each(function() {
		$(this).click(function() {
			expandContract($(this));
			return false;
		});
		expandContract($(this));
	});

	$("#main").css("display", "block");
};

function expandContract(node) {
	var contract = false;
	node.nextAll().each(function() {
		if ($(this).css("display") == "none") {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
			contract = true;
		}
	});
	
	if (contract) {
		node.addClass("nodecontracted");
	} else {
		node.removeClass("nodecontracted");
	}

};

