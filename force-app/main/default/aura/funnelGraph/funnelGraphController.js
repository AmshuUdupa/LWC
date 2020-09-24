({
    myAction: function (component, event, helper) {
        console.log('inside my action');
        var charts = component.find("chartId").getElement();
        console.log("charts>>" + charts);
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

        var dchart = new D3Funnel(data, options);
        dchart.draw(charts);
        JSON.parse

    }
})
