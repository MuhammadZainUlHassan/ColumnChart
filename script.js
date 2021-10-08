document.querySelector(".inputbtn").addEventListener('click', function () {
    var r1 = document.querySelector(".r1").value;
    var c1 = document.querySelector(".c1").value;

    var r2 = document.querySelector(".r2").value;
    var c2 = document.querySelector(".c2").value;

    var r3 = document.querySelector(".r3").value;
    var c3 = document.querySelector(".c3").value;

    var r4 = document.querySelector(".r4").value;
    var c4 = document.querySelector(".c4").value;

    go(r1, r2, r3, r4, c1, c2, c3, c4);

});

function go(r1, r2, r3, r4, c1, c2, c3, c4) {

    var nr1 = parseInt(r1);
    var nr2 = parseInt(r2);
    var nr3 = parseInt(r3);
    var nr4 = parseInt(r4);

    //Google Chart Code
    google.charts.load("current", { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ["Name", "Value", { role: "style" }],
            [c1, nr1, "#b87333"],
            [c2, nr2, "silver"],
            [c3, nr3, "gold"],
            [c4, nr4, "color: #e5e4e2"]
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
            {
                calc: "stringify",
                sourceColumn: 1,
                type: "string",
                role: "annotation"
            },
            2]);

        var options = {
            title: "Column Chart",
            width: 600,
            height: 400,
            bar: { groupWidth: "70%" },
            legend: { position: "none" },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);
    }

}