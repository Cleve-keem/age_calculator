import { useState } from 'react';
import './AgeCalculator.modulus.css';

function AgeCalculator() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [errorDay, setErrorDay] = useState('');
    const [errorMonth, setErrorMonth] = useState('');
    const [errorYear, setErrorYear] = useState('');
    const [dayOutput, setDayOutput] = useState('- -');
    const [monthOutput, setMonthOutput] = useState('- -');
    const [yearOutput, setYearOutput] = useState('- -');

    let isValid = true;

    const handleDayChange = (e) => {
        const value = e.target.value;
        setDay(value);
        if (value < 1 || value > 31) {
            setErrorDay("Invalid day");
            isValid = false;
        } else {
            setErrorDay('');
        }
    };

    const handleMonthChange = (e) => {
        const value = e.target.value;
        setMonth(value);
        if (value < 1 || value > 12) {
            setErrorMonth("Invalid month");
            isValid = false;
        } else {
            setErrorMonth('');
        }
    };
    
    const currentYear = new Date().getFullYear();
    const handleYearChange = (e) => {
        const value = e.target.value;
        setYear(value);
        if (value < 1970 || value > currentYear) {
            setErrorYear(`Year 1970-${currentYear}`);
            isValid = false;
        } else {
            setErrorYear('');
        }
    };

    const calculateAge = () => {
        isValid = true;

        if (errorDay || errorMonth || errorYear) {
            isValid = false;
        }

        const birthday = new Date(`${year}-${month}-${day}`);
        if (isNaN(birthday)) {
            setErrorDay("Invalid date");
            isValid = false;
        }

        if (isValid) {
            const today = new Date();
            let ageYear = today.getFullYear() - birthday.getFullYear();
            let ageMonth = today.getMonth() - birthday.getMonth();
            let ageDay = today.getDate() - birthday.getDate();

            if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
                ageYear--;
                ageMonth += 12;
            }

            if (ageDay < 0) {
                const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
                ageDay += prevMonthDays;
                ageMonth--;
            }

            setDayOutput(ageDay);
            setMonthOutput(ageMonth);
            setYearOutput(ageYear);
        } else {
            setDayOutput('- -');
            setMonthOutput('- -');
            setYearOutput('- -');
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
                            <p className="error">{errorDay}</p>
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
                            <p className="error">{errorMonth}</p>
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
                            <p className="error">{errorYear}</p>
                        </div>
                    </div>
                    <button className="submit" onClick={calculateAge}>
                        <i className="ri-arrow-down-line arrow-down"></i>
                    </button>
                </div>
                <hr />
                <div className="outputs">
                    <div className="output">
                        <div className="years">{yearOutput}<span className="year-span"> Years</span></div>
                    </div>
                    <div className="output">
                        <div className="months">{monthOutput}<span className="month-span"> Months</span></div>
                    </div>
                    <div className="output">
                        <div className="days">{dayOutput}<span className="day-span"> Days</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgeCalculator;
