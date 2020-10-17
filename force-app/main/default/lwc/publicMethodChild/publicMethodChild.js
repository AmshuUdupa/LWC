import {
    LightningElement,
    track,
    api
} from 'lwc';

export default class PublicMethodChild extends LightningElement {
     @track value = ['red'];
        options = [{
                label: 'Red Marker',
                value: 'red'
            },
            {
                label: 'Blue Marker',
                value: 'blue'
            },
            {
                label: 'Green Marker',
                value: 'green'
            },
            {
                label: 'Black Marker',
                value: 'black'
            },
        ];

        @api
        selectedCheckBox(checkBoxValue) {
            const selectedCheckBox = this.options.find(checkBox => {
                    return checkBoxValue === checkBox.value;
                })

                if (selectedCheckBox) {
                    this.value = selectedCheckBox.value;
                    return 'successfully checked';
                }

                return 'no check box';

            }

        }