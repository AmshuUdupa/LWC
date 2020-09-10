import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class EventWithData extends LightningElement {
selectedContact = null;

    @wire(getContactList) contacts ;

    ContactSelected(evet) {
    const ContactId = evet.detail;
    this.selectedContact = this.contacts.data.find(c => c.id === ContactId);
    }

    get listIsNotEmpty(){

        return this.contacts && Array.isArray(this.contacts.data) && this.contacts.data.length > 0   ;
      }


}