
function rects(context) {
    context.fillStyle = "mediumseagrean"
    context.fillRect(200, 200, 600, 20)

    context.fillStyle = "darkorchid"
    context.fillRect(200, 100, 600, 20)

    context.fillStyle = "deepskyblue"
    context.fillRect(200, 300, 600, 20)
}


function circle(context) {
    context.fillStyle = 'crimson'
    context.beginPath()
    context.arc(800, 250, 450, 0, 2*Math.PI)
    context.fill()

    context.fillStyle = 'steelblue'
    context.beginPath()
    context.arc(50, 250, 50, 0, 2*Math.PI)
    context.fill()
}




function launch() {
    var canvas = document.getElementById('base');
    var context = canvas.getContext('2d');

    rects(context);
    circle(context)
}