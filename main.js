window.addEventListener("message", event => {
	if (event.data && event.data.origin && event.data.trigger &&
			event.data.origin === "secret" && event.data.trigger === "speechTrigger") {

		var msg = new SpeechSynthesisUtterance();
		var voices = window.speechSynthesis.getVoices();
		msg.voice = voices[10]; // Note: some voices don't support altering params
		msg.voiceURI = "native";
		msg.volume = 0.004; // 0 to 1
		msg.rate = 0.1; // 0.1 to 10
		msg.pitch = 0; //0 to 2
		msg.text = ["Hello"];
		msg.lang = "en-US";


		if (window.document && window.document.body) {
			window.document.body.addEventListener("click", triggerSpeech);
			window.document.body.addEventListener("click", (thing) => {
				window.document.body.removeEventListener("click", triggerSpeech);
			});
		}

		function triggerSpeech() {
			speechSynthesis.speak(msg);
		}
	}
});