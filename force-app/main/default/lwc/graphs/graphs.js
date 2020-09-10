import { LightningElement, track, api } from 'lwc';

import resourceContainer from '@salesforce/resourceUrl/Resource';
//import D3Funnel from '@salesforce/resourceUrl/D3Funnel';
import D3F from '@salesforce/resourceUrl/D3Funnel';

import { loadScript, loadStyle } from 'lightning/platformResourceLoader';

export default class Graphs extends LightningElement {
 
chartjsInitialized = false;

/* generate the URL for the JavaScript*/
charts = resourceContainer + '/d3-funnel.min.js';
charts2 = resourceContainer + '/d3.v4.min.js';
//charts3 = D3Funnel + '/d3-funnel.min.js';


renderedCallback() {
/*eslint-disable */
console.log("Rendered call");

if (this.chartjsInitialized) {
    return;
}

this.chartjsInitialized = true;
loadScript(this, this.charts2);

loadScript(this, this.charts);

console.log('charts3>>',charts);

this.generateSteppedChart();

/*    Promise.all([
        loadScript(this, resourceContainer + '/d3-funnel.min.js'),
        loadScript(this, resourceContainer + '/d3.v4.min.js')
    ]).then(() => {
    console.log("call ne");    
    this.generateSteppedChart();
})
.catch(error => {
    this.error = error;
    console.log('Error Occured ', error);
}); */
}
errorCallback(error, stack) {
this.error = error;
console.log('call back error this.error ', this.error);
}
generateSteppedChart(){
console.log("in stepped graph");
var data =    
[    
    ['PROSPECT', 2500000],    
    ['PROPOSAL', 1700000],    
    ['NEGOTIATION', 1000000],    
    ['DEAL', 500000]    
];    
var options =    
    {    
    chart:    
        {    
        curve:    
        {    
            enabled: true    
        }    
    }    
};

const ctx = this.template
                    .querySelector('canvas.stepped')
                    .getContext('2d');
console.log("ctx>>"+ctx) ;

chart = new D3Funnel(ctx);

console.log("chart>>>"+chart);

chart.draw(data, options);  

//this.steppedChart = new window.Chart(data, options);  
}

}