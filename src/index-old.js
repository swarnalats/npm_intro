import addToDom from './add_to_dom';
import {add} from './calc';

 
addToDom('h1','Hello again!!');

addToDom('h1',`67 + 28 = ${add (67,28)}`);


