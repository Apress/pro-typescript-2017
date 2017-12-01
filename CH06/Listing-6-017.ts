const constraints = {
    audio: true,
    video: {
        width: 1280,
        height: 720
    }
};

const videoElement = document.createElement('video');
videoElement.setAttribute('width', Math.floor(constraints.video.width / 2).toString());
videoElement.setAttribute('height', Math.floor(constraints.video.height / 2).toString());
document.body.appendChild(videoElement);

navigator.mediaDevices.getUserMedia(constraints)
    .then(function (mediaStream) {
        const video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
            video.play();
        };
    })
    .catch(function (error) {
        console.log(error.name, error.message);
    });