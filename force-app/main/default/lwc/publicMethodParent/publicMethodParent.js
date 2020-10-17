import { LightningElement , track} from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @track value;
    selectCheckBoxHandler(){
        const childComponent= this.template.querySelector('c-public-method-child');
        childComponent.selectedCheckBox(this.value);

    }

    onchangeHandler(event){
        this.value = event.target.value;
    }
}