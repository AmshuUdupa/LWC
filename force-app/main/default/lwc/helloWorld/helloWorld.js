import { LightningElement , track} from 'lwc';

export default class HelloWorld extends LightningElement {
@track dynamicGreeting = 'World';
changeGreeting (event) {
    this.dynamicGreeting = event.target.value;
}
}