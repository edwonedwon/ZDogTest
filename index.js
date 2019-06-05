import style from './styles.css';
import Zdog from 'zdog';

var illoElem = document.querySelector('.illo');
var w = 48;
var h = 48;
var minWindowSize = Math.min( window.innerWidth - 20 , window.innerHeight - 20 );
var zoom = Math.floor( minWindowSize / w );
illoElem.setAttribute( 'width', w * zoom );
illoElem.setAttribute( 'height', h * zoom );

// create illo
let illo = new Zdog.Illustration({
    // set canvas with selector
    element: illoElem,
});

// add circle
new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    stroke: 20,
    color: '#636',
});

// update & render
illo.updateRenderGraph();