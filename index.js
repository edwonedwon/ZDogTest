import style from './styles.css';
import Zdog from 'zdog';

var illoElem = document.querySelector('.illo');
var w = 48;
var h = 48;
var minWindowSize = Math.min(window.innerWidth - 20, window.innerHeight - 20);
var zoom = Math.floor(minWindowSize / w);
illoElem.setAttribute('width', w * zoom);
illoElem.setAttribute('height', h * zoom);


// create illo
let illo = new Zdog.Illustration({
    element: illoElem,
    zoom: 4,
});

var blue = '#0DBDFF';
var orange1 = '#FFA14E';
var orange2 ='#FFB360';
var orange3 = '#FFE390';
var size = 50;

// add circle
let c1 = new Zdog.Ellipse({
    addTo: illo,
    diameter: size,
    stroke: 5,
    color: orange1,
    translate: { z: 40 },
});

let c2 = new Zdog.Ellipse({
    addTo: c1,
    diameter: size/2,
    stroke: 3,
    color: orange2,
})

let c3 = new Zdog.Ellipse({
    addTo: c1,
    color: orange3,
    diameter: size/6,
    stroke: 3,
})

let rect = new Zdog.Rect({
    addTo: illo,
    width: size/2,
    height: size/2,
    translat: { z: -80 },
    stroke: 5,
    color: blue,
    fill: true,
})

let tri = new Zdog.Polygon({
    addTo: illo,
})

let copy = c1.copyGraph({
    translate: {x: 10, y: 30},
    scale: .5,
})

function animate() {
    // illo.rotate.y += 0.01;
    c1.rotate.y += 0.02;
    c2.rotate.y += 0.001;
    c3.rotate.y += 0.0001;

    copy.rotate.y -= 0.01;
    
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();

// update & render
illo.updateRenderGraph();