let ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
});

ros.on('connection', function () {
    console.log('Connected to websocket server.');
});

ros.on('error', function (error) {
    console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function () {
    console.log('Connection to websocket server closed.');
});

// Subscribing to a Topic
// ----------------------

let listener = new ROSLIB.Topic({
    ros: ros,
    name: '/rng_topic',
    messageType: 'training/NumB9'
});

listener.subscribe(function (message) {
    console.log('Received message on ' + listener.name + ': ' + message);
    updateNumber(message.num, message.num_base9);
});

function updateNumber(num, numb9) {
    let e = document.getElementById("number");
    e.textContent=num;
    let e2 = document.getElementById("numberb9");
    e2.textContent=numb9;
};