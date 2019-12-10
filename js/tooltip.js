/**
 * 
 */

let setUpToolTip = function() {
	let tooltip = "", toolTipDiv = document.querySelector(".div-tool-tip"), toolTipElements = Array
			.from(document.querySelectorAll(".tool-tip")), timer;

	let displayTooltip = function(e, obj) {
		tooltip = obj.dataset.tooltip;
		toolTipDiv.innerHTML = tooltip;
		toolTipDiv.style.top = e.pageY + "px";
		toolTipDiv.style.left = e.pageX + "px";
		// toolTipDiv.style.opacity = 1;
		fadeIn(toolTipDiv);

	};

	let fadeOut = function(element) {
		let op = 1;
		if (!timer) {
			timer = setInterval(function() {
				if (op <= 0.1) {
					clearInterval(timer);
					timer = null;
					element.style.opacity = 0;
					element.style.display = "none";
				}
				element.style.opacity = op;
				op -= op * 0.1;
			}, 10);
		}
	};

	let fadeIn = function(element) {
		let op = 0.1;
		element.style.display = "block";
		let timer = setInterval(function() {
			if (op >= 1) {
				clearInterval(timer);
			}
			element.style.opacity = op;
			op += op * 0.1;
		}, 10);
	};

	toolTipElements.forEach(function(ele) {
		let timeout;
		ele.addEventListener("mouseenter", function(e) {
			let that = this;
			timeout = setTimeout(function() {
				displayTooltip(e, that);
			}, 400);
		});
		ele.addEventListener("mouseleave", function(e) {
			// toolTipDiv.style.opacity = 0;
			clearTimeout(timeout);
			fadeOut(toolTipDiv);
		});
	});
};
setUpToolTip();