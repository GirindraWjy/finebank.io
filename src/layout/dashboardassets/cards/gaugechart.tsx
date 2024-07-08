import { onMount } from "solid-js";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const Gauge =  () => {
    onMount(() => {
        let root = am5.Root.new("chartdiv");

        // Set themes
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create chart
        let chart = root.container.children.push(
            am5radar.RadarChart.new(root, {
                panX: false,
                panY: false,
                startAngle: 180,
                endAngle: 360
            })
        );

        // Create axis and its renderer
        let axisRenderer = am5radar.AxisRendererCircular.new(root, {
            innerRadius: -10,
            strokeOpacity: 1,
            strokeWidth: 10,
            strokeGradient: am5.LinearGradient.new(root, {
                rotation: 0,
                stops: [
                    { color: am5.color(0x299D91) },
                    { color: am5.color(0x299D91) },
                    { color: am5.color(0x299D91) },
                    { color: am5.color(0x299D91) }
                ]
            })
        });

        let xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 0,
                min: 0,
                max: 100,
                strictMinMax: true,
                renderer: axisRenderer
            })
        );

        // Add clock hand
        let axisDataItem = xAxis.makeDataItem({});
        axisDataItem.set("value", 0);

        let bullet = axisDataItem.set("bullet", am5xy.AxisBullet.new(root, {
            sprite: am5radar.ClockHand.new(root, {
                radius: am5.percent(80)
            })
        }));

        xAxis.createAxisRange(axisDataItem);

        // Access and hide the grid
        let grid = axisDataItem.get("grid");
        if (grid) {
            grid.set("visible", false);
        }

        setInterval(() => {
            axisDataItem.animate({
                key: "value",
                to: Math.round(Math.random() * 100),
                duration: 800,
                easing: am5.ease.out(am5.ease.cubic)
            });
        }, 1000);

        // Make stuff animate on load
        chart.appear(1000, 100);
    });

    return (
        <div id="chartdiv" style={{ width: "10vw", height: "15vh" }}></div>
    );
};

export default Gauge;
