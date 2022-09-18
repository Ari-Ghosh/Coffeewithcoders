import * as React from 'react';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    WeekView,
    MonthView,
    Toolbar,
    DateNavigator,
    TodayButton,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    ConfirmationDialog,
    DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
// import {
//   Scheduler,
//   WeekView,
//   MonthView,
//   Appointments,
//   AppointmentTooltip,
//   DayView,
//   ViewSwitcher,
//   Toolbar,
//   DragDropProvider,
//   EditRecurrenceMenu,
// } from '@devexpress/dx-react-scheduler-material-ui';

const appointments = [{
    title: 'Website Re-Design Plan',
    startDate: new Date(2018, 5, 25, 9, 35),
    endDate: new Date(2018, 5, 25, 11, 30),
    id: 0,
    rRule: 'FREQ=DAILY;COUNT=3',
    exDate: '20180628T063500Z,20180626T063500Z',
}, {
    title: 'Book Flights to San Fran for Sales Trip',
    startDate: new Date(2018, 5, 25, 12, 11),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 1,
    rRule: 'FREQ=DAILY;COUNT=4',
    exDate: '20180627T091100Z',
}, {
    title: 'Install New Router in Dev Room',
    startDate: new Date(2018, 5, 25, 13, 30),
    endDate: new Date(2018, 5, 25, 14, 35),
    id: 2,
    rRule: 'FREQ=DAILY;COUNT=5',
}];

const ExternalViewSwitcher = ({
    currentViewName,
    onChange,
}) => (
    <RadioGroup
        aria-label="Views"
        style={{ flexDirection: 'row' }}
        name="views"
        value={currentViewName}
        onChange={onChange}
    >
        <FormControlLabel value="Day" control={<Radio />} label="Day" />
        <FormControlLabel value="Week" control={<Radio />} label="Week" />
        <FormControlLabel value="Work Week" control={<Radio />} label="Work Week" />
        <FormControlLabel value="Month" control={<Radio />} label="Month" />
    </RadioGroup>
);

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: appointments,
            currentDate: new Date(),
            currentViewName: 'Day',
        };

        this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
        this.commitChanges = this.commitChanges.bind(this);
        this.currentViewNameChange = (e) => {
            this.setState({ currentViewName: e.target.value });
        };
    }

    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            return { data };
        });
    }

    render() {
        const { currentDate, data, currentViewName } = this.state;

        return (
            <React.Fragment>
                <ExternalViewSwitcher
                    currentViewName={currentViewName}
                    onChange={this.currentViewNameChange}
                />
                <Paper>
                    <Scheduler
                        data={data}
                        height='auto'
                    >
                        <ViewState
                            currentDate={currentDate}
                            onCurrentDateChange={this.currentDateChange}
                            currentViewName={currentViewName}
                        />
                        <EditingState
                            onCommitChanges={this.commitChanges}
                        />
                        <IntegratedEditing />
                        <DayView
                            startDayHour={9}
                            endDayHour={17}
                        />
                        <WeekView
                            startDayHour={9}
                            endDayHour={19}
                        />
                        <WeekView
                            name="Work Week"
                            excludedDays={[0, 6]}
                            startDayHour={9}
                            endDayHour={19}
                        />
                        <MonthView />
                        <ConfirmationDialog />
                        <Toolbar />
                        <DateNavigator />
                        <TodayButton />
                        <Appointments />
                        <DragDropProvider/>
                        <AppointmentTooltip
                            showOpenButton
                            showDeleteButton
                        />
                        <AppointmentForm />
                    </Scheduler>
                </Paper>
            </React.Fragment>
        );
    }
}
