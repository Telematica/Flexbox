import _ from 'lodash';
import '../scss/main.scss';
//const css = require('../css/styles.css');

function main() {
    /*
     var element = document.createElement('div');
     // Lodash, currently included via a script, is required for this line to work
     // Lodash, now imported by this script
     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

     return element;
     */
    console.log(document, document.body, document.querySelector('body'));
    //document.querySelector('body').appendChild(component());
}

window.onload = main;
