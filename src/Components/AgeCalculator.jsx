import { useState } from 'react';
import './AgeCalculator.modulus.css';

function AgeCalculator() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [errorDay, setErrorDay ] = useState('');
    const [errorMonth, setErrorMonth ] = useState('');
    const [errorYear, setErrorYear ] = useState('');


    const handleDayChange = (e) => {
        const value = e.target.value;
        setDay(value);
        // sending error message
        if (value < 1 || value > 31){
            setErrorDay("Pls enter the valid day");
        }
        else{
            setErrorDay('');
        }
    };

    const handleMonthChange = (e) => {
        const value = e.target.value;
        setMonth(value);
        if (value < 1 || value > 12){
            setErrorMonth("Pls enter the valid Month");
        }
        else{
            setErrorMonth('');
        }
    };

    const handleYearChange = (e) => {
        const currentYear = new Date().getFullYear();
        const value = e.target.value;
        setYear(value);
        if (value < 1970 || value > currentYear){
            setErrorYear(`Enter a year within 1970-${currentYear}`);
        }
        else{
            setErrorYear('');
        }
    };

    return (
        <div className="container">
            <div className="wrapper">
                <div className="top-section">
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="day">Day</label>
                            <input
                                type="number"
                                name="day" 
                                id="day" 
                                value={day}
                                onChange={handleDayChange}
                            />
                            <p className='error'>{errorDay}</p>
                        </div>
                        <div className="input">
                            <label htmlFor="month">Month</label>
                            <input 
                                type="number"
                                name="month"
                                id="month"
                                value={month}
                                onChange={handleMonthChange}
                            />
                            <p className='error'>{errorMonth}</p>
                        </div>
                        <div className="input">
                            <label htmlFor="year">Year</label>
                            <input
                                type="number"
                                name="year"
                                id="year"
                                value={year}
                                onChange={handleYearChange}
                            />
                            <p className='error'>{errorYear}</p>
                        </div>
                    </div>
                    <button className="submit" onClick={() => { }}>
                        <i className="ri-arrow-down-line arrow-down"></i>
                    </button>
                </div>
                <hr />
                <div className="outputs">
                    <div className="output">
                        <div className="years">- - <span className='year-span'>Years</span></div>
                    </div>
                    <div className="output">
                        <div className="months">- - <span className='month-span'>Months</span></div>
                    </div>
                    <div className="output">
                        <div className="days"> - - <span className='day-span'>Days</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgeCalculator;
