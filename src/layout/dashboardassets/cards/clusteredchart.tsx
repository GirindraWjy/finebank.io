import { onMount, onCleanup } from "solid-js";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const Gauge = () => {
    onMount(() => {
        let root = am5.Root.new("chartdiv2");

        // Set themes
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create chart
        let chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX",
            paddingLeft: 0,
            layout: root.verticalLayout
        }));

        // Data
        let data = [{
            year: "17 Sun",
            thisweek: 23500,
            lastweek: 18100
        }, {
            year: "18 Mon",
            thisweek: 26200,
            lastweek: 22800
        }, {
            year: "19 Tue",
            thisweek: 30100,
            lastweek: 23900
        }, {
            year: "20 Wed",
            thisweek: 29500,
            lastweek: 25100
        }, {
            year: "21 Thu",
            thisweek: 24600,
            lastweek: 25000
        }];

        // Create axes
        let yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
            categoryField: "year",
            renderer: am5xy.AxisRendererY.new(root, {
                inversed: true,
                cellStartLocation: 0.1,
                cellEndLocation: 0.9,
                minorGridEnabled: true
            })
        }));

        yAxis.data.setAll(data);

        let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererX.new(root, {
                strokeOpacity: 0.1,
                minGridDistance: 50
            }),
            min: 0,
            numberFormat: "$#,###" // Format axis labels as currency
        }));

        // Add series
        function createSeries(field: string, name: string, color: string) {
            let series = chart.series.push(am5xy.ColumnSeries.new(root, {
                name: name,
                xAxis: xAxis,
                yAxis: yAxis,
                valueXField: field,
                categoryYField: "year",
                sequencedInterpolation: true,
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "[bold]{name}[/]\n{categoryY}: ${valueX}" // Format tooltip as currency
                })
            }));

            series.columns.template.setAll({
                height: am5.p100,
                strokeOpacity: 0,
                fill: am5.color(color),
                cornerRadiusTL: 0, // Top-left corner radius
                cornerRadiusTR: 5, // Top-right corner radius
                cornerRadiusBL: 0, // Bottom-left corner radius
                cornerRadiusBR: 5,  // Set the color of the series
            });


            series.bullets.push(function () {
                return am5.Bullet.new(root, {
                    locationX: 1,
                    locationY: 0.5,
                    sprite: am5.Label.new(root, {
                        centerX: am5.p100,
                        centerY: am5.p50,
                        text: "{name}",
                        fill: am5.color(0xffffff),
                        populateText: true,
                        fontSize: 10
                    })
                });
            });

            series.data.setAll(data);
            series.appear();

            return series;
        }

        createSeries("thisweek", "This Week", "#299D91");
        createSeries("lastweek", "Last Week", "#E8E8E8");

        // Add legend
        let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50
        }));

        legend.data.setAll(chart.series.values);

        // Add cursor
        let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
            behavior: "zoomY"
        }));
        cursor.lineY.set("forceHidden", true);
        cursor.lineX.set("forceHidden", true);

        // Make stuff animate on load
        chart.appear(1000, 100);
    });

    return (
        <div id="chartdiv2" style={{ width: "100%", height: "100%" }}></div>
    );
};

export default Gauge;
