import { LightningElement, track, api } from 'lwc';

//import resourceContainer from '@salesforce/resourceUrl/Resource';
//import D3Funnel from '@salesforce/resourceUrl/D3Funnel';
//import D3F from '@salesforce/resourceUrl/D3F';
import D3Fnew from '@salesforce/resourceUrl/D3FNew';

import { loadScript, loadStyle } from 'lightning/platformResourceLoader';

export default class Graphs extends LightningElement {
    chart;
    steppedChart;
chartjsInitialized = false;

/* generate the URL for the JavaScript*/
//charts = resourceContainer + '/d3-funnel.min.js';
//charts2 = resourceContainer + '/d3.v4.min.js';
//charts3 = D3Funnel + '/d3-funnel.min.js';


renderedCallback() {
/*eslint-disable */
console.log("Rendered call");

if (this.chartjsInitialized) {
    return;
}
//console.log('D3F>>'+D3F);
this.chartjsInitialized = true;
//, loadScript(this, `${resourceContainer}/d3-funnel.min.js`)

Promise.all([loadScript(this, D3Fnew+'/d3.v3.min.js'),loadScript(this, D3Fnew+'/D3Funnel.js')])
    .then( (message) => {
                    console.log("call me>>"+message);    
                    this.generateSteppedChart();
                })
    .catch( (error) => {
                    this.error = error;
                   
                    console.log('Error Occured ', error);
                    setTimeout(()=>{ alert("Hello"); }, 3000);
                    this.generateSteppedChart();
                }); 

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

const ctx2 = this.template
                    .querySelector('stepped');
                    

console.log("ctx>>"+ctx) ;
console.log("ctx2>>"+ctx2) ;


this.chart = new D3Funnel(data, options);
chart.draw(ctx);
console.log("chart>>>"+this.chart);

//chart.draw(data, options);  

//this.steppedChart = new window.Chart(data, options);  
}

}