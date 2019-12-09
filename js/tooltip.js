/**
 * 
 */

let setUpToolTip = function() {
	let tooltip = "", toolTipDiv = document.querySelector(".div-tool-tip"),
	toolTipElements = Array.from(document.querySelectorAll(".tool-tip"));

	let displayTooltip = function(e, obj) {
		tooltip = obj.dataset.tooltip;
		toolTipDiv.innerHTML = tooltip;
		toolTipDiv.style.opacity = 1;
		toolTipDiv.style.top = e.pageY + "px";
		toolTipDiv.style.left = e.pageX + "px";

	};

	toolTipElements.forEach(function(ele) {
		ele.addEventListener("mouseenter", function(e) {
			displayTooltip(e, this);
		});
	});
};
setUpToolTip();