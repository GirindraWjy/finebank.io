import './statistic.css';
import Chart from './clusteredchart'


function Statistic() {

    return (
        <div class="parent-statistics-container">
            <p class="statistics-title">Statistics</p>
            <div class="statistics-container">
                <Chart />
            </div>
        </div>
    );
}

export default Statistic;
