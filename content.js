console.log("HelpMeOut is ready!!");

function generateUUID() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
		/[xy]/g,
		function (c) {
			var r = (Math.random() * 16) | 0,
				v = c == "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		}
	);
}

document.addEventListener("DOMContentLoaded", async () => {
	const div = document.createElement("div");
	div.classList.add("dom-div101");
	div.innerHTML = `
	<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0" />
		<title>floater</title>
		<link
			rel="stylesheet"
			href="./css/hover.css" />
	</head>
	<body>
		<main>
			<div class="dom-div101-container">
				<div class="dom-div101-avatar "></div>
				<div class="controls-container">
					<div class="timer">
						<div class="timer-container">
							<div class="timer-sec">00</div>
							<div class="timer-separator">:</div>
							<div class="timer-min">00</div>
							<div class="timer-separator">:</div>
							<div class="timer-hrs">00</div>
						</div>
						<div class="status"></div>
					</div>
					<svg
						width="1"
						height="48"
						viewBox="0 0 1 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<line
							x1="0.5"
							y1="2.18557e-08"
							x2="0.499998"
							y2="48"
							stroke="#E8E8E8" />
					</svg>

					<div class="controls">
						<button
							id="pause_video"
							title="Pause">
						<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="43" height="43" rx="21.5" fill="white"/>
<path d="M18 16.5L18 27.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
<path d="M26 16.5L26 27.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
<rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="white"/>
</svg>

						</button>

						<button
							id="stop_video"
							title="Stop">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="heroicons-outline/stop">
<path id="Rectangle 437" d="M5.25 7.5C5.25 6.25736 6.25736 5.25 7.5 5.25H16.5C17.7426 5.25 18.75 6.25736 18.75 7.5V16.5C18.75 17.7426 17.7426 18.75 16.5 18.75H7.5C6.25736 18.75 5.25 17.7426 5.25 16.5V7.5Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

						</button>

						<button
							id="toggle_camera"
							title="Toggle Camera">

							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="heroicons-outline/video-camera">
<path id="Vector" d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

						</button>

						<button
							id="toggle_mic"
							title="Toggle Microphone">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="heroicons-outline/microphone">
<path id="Vector" d="M12 18.75C15.3137 18.75 18 16.0637 18 12.75V11.25M12 18.75C8.68629 18.75 6 16.0637 6 12.75V11.25M12 18.75V22.5M8.25 22.5H15.75M12 15.75C10.3431 15.75 9 14.4069 9 12.75V4.5C9 2.84315 10.3431 1.5 12 1.5C13.6569 1.5 15 2.84315 15 4.5V12.75C15 14.4069 13.6569 15.75 12 15.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

						</button>

						<button
							id="start_videos"
							title="Delete">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="heroicons-outline/trash">
<path id="Vector" d="M14.7404 9L14.3942 18M9.60577 18L9.25962 9M19.2276 5.79057C19.5696 5.84221 19.9104 5.89747 20.25 5.95629M19.2276 5.79057L18.1598 19.6726C18.0696 20.8448 17.0921 21.75 15.9164 21.75H8.08357C6.90786 21.75 5.93037 20.8448 5.8402 19.6726L4.77235 5.79057M19.2276 5.79057C18.0812 5.61744 16.9215 5.48485 15.75 5.39432M3.75 5.95629C4.08957 5.89747 4.43037 5.84221 4.77235 5.79057M4.77235 5.79057C5.91878 5.61744 7.07849 5.48485 8.25 5.39432M15.75 5.39432V4.47819C15.75 3.29882 14.8393 2.31423 13.6606 2.27652C13.1092 2.25889 12.5556 2.25 12 2.25C11.4444 2.25 10.8908 2.25889 10.3394 2.27652C9.16065 2.31423 8.25 3.29882 8.25 4.47819V5.39432M15.75 5.39432C14.5126 5.2987 13.262 5.25 12 5.25C10.738 5.25 9.48744 5.2987 8.25 5.39432" stroke="#BEBEBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

						</button>
					</div>
				</div>
			</div>
		</main>

		<script src="./js/hover.js" />
	</body>
</html>
`;

	var recorder = null;
	var chunks = [];
	var sleep = (time = 1) =>
		new Promise((res) => setTimeout(res, time * 1000));
	let isRecording = false;
	var videoId = generateUUID();
	console.log("Generated video ID:", videoId);

	function onAccessApproved(stream) {
		recorder = new MediaRecorder(stream);

		recorder.ondataavailable = function (e) {
			chunks.push(e.data);
		};

		recorder.onstop = async  function () {
			stream.getTracks().forEach((track) => {
				if (track.readyState === "live") {
					track.stop();
				}
			});

			const recordedBlob = new Blob(chunks, {
				type: "video/webm; codecs=vp8",
			});
			// const formData = new FormData();
			// formData.append("blob", recordedBlob, `${videoId}.webm`);
			// formData.append("videoId", videoId);
			// const apiUrl =
			// 	"https://seashell-app-4jicj.ondigitalocean.app/api/video/stream"; 

			// await fetch(
			// 	`https://seashell-app-4jicj.ondigitalocean.app/api/stream/end/${videoId}`
			// );

			// fetch(apiUrl, {
			// 	method: "POST",
			// 	body: formData, // Use the FormData object as the request body
			// })
			// 	.then((response) => {
			// 		if (response.ok) {
			// 			// The request was successful (status code 200)
			// 			console.log(
			// 				response,"Video data uploaded successfully."
			// 			);
			// 		window.location.href = `https://chrome-ext-fe-2-mppb.vercel.app/pages/video-ready?id=${videoId}`;

			// 			// You can handle the response here if needed
			// 		} else {
			// 			// Handle the error or non-200 status codes here
			// 			console.error(
			// 				"Failed to upload video data. Status:",
			// 				response.status
			// 			);
			// 		}
			// 	})
			// 	.catch((error) => {
			// 		// Handle any network or request errors here
			// 		console.error("Error:", error);
			// 	});
			console.log(chunks);
			chunks = [];

			let url = URL.createObjectURL(recordedBlob);
			let a = document.createElement("a");
			a.style.display = "none";
			a.href = url;
			a.download = "helpmeout-recording.webm";
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		};

		recorder.start();
		isRecording = true;
	}

	chrome.runtime.onMessage.addListener(
		async (message, sender, sendResponse) => {
			if (message.action === "request_recording") {
				console.log("Requesting recording");
				document.body.appendChild(div);

				sendResponse(`Processed: ${message.action}`);
				if (navigator.mediaDevices) {
					navigator.mediaDevices
						.getDisplayMedia({
							audio: true,
							video: {
								width: 9999999, // large dimensions === better video quality
								height: 9999999,
							},
						})
						.then((stream) => {
							onAccessApproved(stream);
						})
						.catch((error) => {
							document.body.removeChild(div);

							console.log("Record cancelled,", error);
						});
				} else {
					console.error(
						"navigator.mediaDevices is not supported."
					);
				}

				await sleep(2);
				let stopBtn = document.getElementById("stop_video");
				if (stopBtn) {
					stopBtn.addEventListener("click", () => {
						if (recorder) {
							recorder.stop();
							isRecording = false;
							document.body.removeChild(div);
						} else {
							console.log("recorder not found");
						}
					});
				} else {
					console.log("not available");
					stopBtn = document.getElementById("stop_video");
				}
			}

			if (message.action == "camera_checked") {
				console.log("camera checked");
				sendResponse(`processed: ${message.action}`);
				if (navigator.mediaDevices) {
					const constraint = {
						audio: true,
						video: true,
					};
					navigator.mediaDevices
						.getUserMedia(constraint)
						.then((stream) => {
							onAccessApproved(stream);
						})
						.catch((error) => {
							document.body.removeChild(div);

							console.log("Record cancelled,", error);
						});
				} else {
					console.log("Record cancelled");
				}
			}
		}
	);
});
