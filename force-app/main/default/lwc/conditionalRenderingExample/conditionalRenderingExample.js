import { LightningElement , track} from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
@track displayDiv = false;
@track cityList = ['Bengaluru','Mangaluru','Changaluru'];
@track displayCity = false;

showDivHandler(event){

this.displayDiv = event.target.checked;
}
showCity(event){
    this.displayCity = event.target.checked;
}
}