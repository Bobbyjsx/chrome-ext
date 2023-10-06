document.addEventListener("DOMContentLoaded", () => {
	//get selectors
	

	const startBtn = document.getElementById("start_video");
	const stopBtn = document.getElementById("stop_video");
	const cameraState = document.querySelector(".camera_switch");
	const sudioState = document.querySelector(".audio_switch");
	console.log(cameraState);
	//add event listeners

	startBtn.addEventListener("click", () => {
		chrome.tabs.query(
			{ active: true, currentWindow: true },
			function (tabs) {
				chrome.tabs.sendMessage(
					tabs[0].id,
					{ action: "request_recording" },
					function (response) {
						if (!chrome.runtime.lastError) {
							console.log(response);
						} else {
							console.log(chrome.runtime.lastError),
								"error on line 15";
						}
					}
				);
			}
		);
	});

	stopBtn.addEventListener("click", () => {
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

	cameraState.addEventListener("change", () => {
		if (cameraState.checked) {
			console.log("checked");
			chrome.tabs.query(
				{ active: true, currentWindow: true },
				function (tabs) {
					chrome.tabs.sendMessage(
						tabs[0].id,
						{ action: "camera_checked" },
						function (response) {
							if (!chrome.runtime.lastError) {
								console.log(response);
							} else {
								console.log(chrome.runtime.lastError),
									"error on line 69";
							}
						}
					);
				}
			);
		} else {
			chrome.tabs.query(
				{ active: true, currentWindow: true },
				function (tabs) {
					chrome.tabs.sendMessage(
						tabs[0].id,
						{ action: "camera_not_checked" },
						function (response) {
							if (!chrome.runtime.lastError) {
								console.log(response);
							} else {
								console.log(chrome.runtime.lastError),
									"error on line 69";
							}
						}
					);
				}
			);
		}
	});
});

//add event listeners for camera state if it is checked send a message with action camera checked

const toggleInput = document.querySelector(".switch");

toggleInput.addEventListener("change", () => {
	if (toggleInput.checked) {
		//
	} else {
		//
	}
});
