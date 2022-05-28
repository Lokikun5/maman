
var txtAnim = document.getElementById('h11');

var typewriter = new Typewriter(txtAnim, {
    
    delay: 75,
});

typewriter

.typeString('Joyeuse fête à toutes les ')
.pauseFor(100)
.typeString(' <span style ="color: #27ae60"><strong>Mamans</strong></span>')
.pauseFor(500)
.typeString(' !')
.start();

var txtAnim2 = document.getElementById('love');

var txtAnim2 = new Typewriter(txtAnim2, {
    
    delay: 75,
});

typewriter
.pauseFor(600)
.typeString('<br> <span style ="color: #DE2E6C">We Love U</span>')
.pauseFor(100)
.typeString('😘')
.pauseFor(500)
.typeString(' !')
.start();