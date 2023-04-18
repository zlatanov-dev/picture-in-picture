const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass to videoElement, then play
async function selectMediaStream() {
    try{
        const mediaStream  = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        alert(error.message);
    }
}

button.addEventListener('click', async () => {
    // Disable Button 
    button.disable = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    button.disable = false;
});

selectMediaStream();