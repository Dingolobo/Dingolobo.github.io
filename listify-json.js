
$.ajax({
    url: 'https://streamtp1.com/eventos.php',
    type: "get",
    dataType: "json",
   
    success: function(data) {
        drawTable(data);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#personDataTable").append(row); 
    row.append($("<td>" + rowData.time + "</td>"));
    row.append($("<td>" + rowData.title + "</td>"));
    row.append($("<td>" + rowData.link + "</td>"));
}

