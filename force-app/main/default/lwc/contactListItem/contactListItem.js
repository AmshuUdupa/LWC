import { LightningElement,api,track } from 'lwc';

export default class ContactListItem extends LightningElement {
@api contact;

selectHandler(event) {
    event.preventDefault();

    const selectedEvent = new customEvent('selected', {detail: this.contact.id});
    this.dispatchEvent(selectedEvent);

}


}