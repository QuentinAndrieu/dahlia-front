import React, { Component } from 'react';
import Chart from 'react-chartjs';

class BarChartCustom extends Component {

    render() {
        let chartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: this.props.dataSet[0].label,
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.props.dataSet[0].data
                },
                {
                    label: this.props.dataSet[1].label,
                    fillColor: "rgb(116,79,198,0.2)",
                    strokeColor: "rgb(116,79,198,1)",
                    pointColor: "rgb(116,79,198,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgb(116,79,198,1)",
                    data: this.props.dataSet[1].data
                }
            ]
        };

        let BarChart = Chart.Bar;

        return (
            <BarChart width="700" height="300" data={chartData} options={{
                responsive: true,
                maintainAspectRatio: false
            }} />
        )
    }
}

export default BarChartCustom;
