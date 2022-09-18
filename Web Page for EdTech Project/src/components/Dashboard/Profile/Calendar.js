// import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import React,{useState} from 'react';

const Calendar = () => {
    const date = new Date();
    const [selected, setSelected] = useState(date);
    setInterval(() => {
        const date = new Date();
        setSelected(date)
    }, (3600*24));
    return (
        <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
        />
    );

}
export default Calendar;