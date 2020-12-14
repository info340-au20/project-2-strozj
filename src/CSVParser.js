let stateCSV = new Array();
function loadCSV() {
        d3.csv("./data/GHG-emissions-by-life-cycle-stage-OurWorldinData-upload.csv").then(function(data) {
        for (let i = 0; i < data.length; i++) {
            stateCSV.push(data[i]);
            stateCSV[i]["Food product"] = stateCSV[i]["Food product"].replaceAll(' ', '_');
            stateCSV[i]["Food product"] = stateCSV[i]["Food product"].replaceAll('(', '');
            stateCSV[i]["Food product"] = stateCSV[i]["Food product"].replaceAll(')', '');
            stateCSV[i]["Food product"] = stateCSV[i]["Food product"].replaceAll('&', '');
            delete stateCSV[i][""];
        }
    });
}
loadCSV();
