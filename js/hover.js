console.log('hover ready');
document.addEventListener("DOMContentLoaded", () => {
	//get selectors

    const stopBtn = document.getElementById("stop_video");
    
console.log(stopBtn);
	//add event listeners


    stopBtn.addEventListener("click", () => {
console.log('stop clicked');
        
		chrome.tabs.query(
			{ active: true, currentWindow: true },
			function (tabs) {
				chrome.tabs.sendMessage(
					tabs[0].id,
					{ action: "stopVideo" },
					function (response) {
						if (!chrome.runtime.lastError) {
							console.log(response);
						} else {
							console.log(chrome.runtime.lastError),
								"error on line 40";
						}
					}
				);
			}
		);
	});
});

//


const toggleInput = document.querySelector(".switch");

toggleInput.addEventListener("change", () => {
	if (toggleInput.checked) {
		//
	} else {
		//
	}
});
