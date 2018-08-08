


function openStream(){
    const config = {
        audio: false,
        video: {
            mandatory: {
                chromeMediaSource: 'screen',
                maxWidth: 1280,
                maxHeight: 720
            },
            optional: []
        }
    };
    return navigator.mediaDevices.getUserMedia(config);
}
function playStream(idVideoTag, stream){
    const video = document.getElementById(idVideoTag);
    video.srcObject = stream;
    video.play();
}

const peer = new Peer({ host: '192.168.100.22', port: 9000, debug: 3});

peer.on('open', id => $('#my-peer').append(id));

$('#btnCall').click(() =>{
    $('#xx').show();
    $('#remoteStream').show();
    const id = document.getElementById("contacts").value;
    openStream()
    .then(stream => {
        playStream('localStream', stream);
        const call = peer.call(id, stream);
        $('#btnDone').show();
        $('#btnDone').click(() =>{
            call.close();
            $('#xx').hide();
            $('#btnDone').hide();
            $('#remoteStream').hide();
        });
        call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
    });
});

peer.on('call', call => {
    $('#xx').show();
    $('#remoteStream').show();
    openStream()
    .then(stream => {
        call.answer(stream);
        $('#btnDone').show();
        $('#btnDone').click(() =>{
            call.close();
            $('#xx').hide();
            $('#remoteStream').hide();
            $('#btnDone').hide();
        });
        playStream('localStream', stream);
        call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
    });
});



