import {a} from './test.js';
import '../css/test.css';
console.log(a);
var text = document.createElement("p");
text.innerHTML="test var = " +a;
document.getElementById("testID").appendChild(text);