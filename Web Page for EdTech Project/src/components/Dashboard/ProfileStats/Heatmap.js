import React from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import Card from "../../UI/Card";
import './Heatmap.css'


const Heatmap = () => {


    return (
        <Card className="Heatmap">
            <h2>Consistency</h2>
            <CalendarHeatmap
                startDate={'2021-08-01'}
                endDate={new Date}
                values={[
                    { date: '2022-08-01', count: 1 },
                    { date: '2022-01-03', count: 1 },
                    { date: '2022-01-06', count: 1 },
                ]}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-scale-${value.count}`;
                }}
                showWeekdayLabels={true}
                horizontal={true}
                tooltipDataAttrs={(value) => { return { 'data-tooltip': 'Tooltip: ' + value } }}
                veiwbBox="0 0 461 213"
            />
            <span id="Attendence">Class Attendence is: 3</span>
        </Card>
    );
}

export default Heatmap;