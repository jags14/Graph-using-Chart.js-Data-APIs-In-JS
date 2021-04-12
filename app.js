 
 const xLables = [];
 const yLables = [];

graph();


 async function graph(){
    await  getData();
 const canvas = document.getElementById("myCanvas");
 
 
 //console.log(canvas);
 const ctx = canvas.getContext("2d");
 
 var myChart = new Chart(ctx, {
    //type: 'bar',
    type: 'line',
    //fill: false,
    data: {
        labels: xLables,
        datasets: [{
            label: 'Average Temperature each year',
            data: yLables,
            backgroundColor: 'rgba(153, 102, 255, 1)',
                
            borderWidth: 2
        }]
    },
    
});

 }


        
        async function getData(){
            const response = await fetch("./ZonAnn.Ts+dSST.csv");
            const data = await response.text();
           // console.log(data);
            // split data from the new line
            const rows = data.split('\n');
            // console.log(rows);
            // slice array of rows and remove the first row
            const table = rows.slice(1);
            // console.log(remRows);
            table.forEach(row =>{
                const cols = row.split(',');
                const year = cols[0];
                xLables.push(year);
                const avgTemp = cols[2];
                yLables.push(parseFloat(avgTemp) + 14);
                console.log(year, avgTemp);
            })
        }

 