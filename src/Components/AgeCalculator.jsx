import { useState } from 'react';
import './AgeCalculator.modulus.css';

function AgeCalculator() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [error, setError] = useState({ day: "", month: "", year: ""});
    const [dayOutput, setDayOutput] = useState('- -');
    const [monthOutput, setMonthOutput] = useState('- -');
    const [yearOutput, setYearOutput] = useState('- -');
    
    const currentYear = new Date().getFullYear();

    const validateInputs = () => {
        let isValid = true;
        const newErrors = { day: "", month: "", year: ""};
        if(!day || day < 1 || day > 31){
            isValid = false;
            newErrors.day = "Invalid Date";
        }

        if(!month || month < 0 || month > 12){
            isValid = false;
            newErrors.month = "Invalid Month";
        }

        if(!year || year < 1900 || year > currentYear){
            isValid = false;
            newErrors.year = `Year btn 1900-${currentYear}`;
        }

        setError(newErrors);
        return isValid;
    }

    const calculateAge = () => {
        if(!validateInputs()){
            // set all the output back to default
            setDayOutput('- -');
            setMonthOutput('- -');
            setYearOutput('- -');

            return;
        }

        const birthday = new Date(`${year}-${month}-${day}`);
        const today = new Date();

        const ageDay = today.getDate() - birthday.getDate();
        const ageMonth = today.getMonth() - birthday.getMonth();
        const ageYear = today.getFullYear() - birthday.getFullYear();

        if (ageMonth < 0 ){
            ageMonth += 12
            ageYear--;
        }
        
        if(ageDay < 0 ){
            const previousMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            ageDay += previousMonthDays;
            ageMonth--;
        }
        
        setDayOutput(ageDay);
        setMonthOutput(ageMonth);
        setYearOutput(ageYear);
        
    }

    // const handleDayChange = (e) => {
    //     const value = e.target.value;
    //     setDay(value);
    //     if (value < 1 || value > 31) {
    //         setErrorDay("Invalid day");
    //         isValid = false;
    //     } else {
    //         setErrorDay('');
    //     }
    // };

    // const handleMonthChange = (e) => {
    //     const value = e.target.value;
    //     setMonth(value);
    //     if (value < 1 || value > 12) {
    //         setErrorMonth("Invalid month");
    //         isValid = false;
    //     } else {
    //         setErrorMonth('');
    //     }
    // };
    
    // const handleYearChange = (e) => {
    //     const value = e.target.value;
    //     setYear(value);
    //     if (value < 1970 || value > currentYear) {
    //         setErrorYear(`Year 1970-${currentYear}`);
    //         isValid = false;
    //     } else {
    //         setErrorYear('');
    //     }
    // };

    // const calculateAge = () => {
    //     isValid = true;

    //     if (errorDay || errorMonth || errorYear) {
    //         isValid = false;
    //     }

    //     const birthday = new Date(`${year}-${month}-${day}`);
    //     if (isNaN(birthday)) {
    //         setErrorDay("Invalid date");
    //         isValid = false;
    //     }

    //     if (isValid) {
    //         const today = new Date();
    //         let ageYear = today.getFullYear() - birthday.getFullYear();
    //         let ageMonth = today.getMonth() - birthday.getMonth();
    //         let ageDay = today.getDate() - birthday.getDate();

    //         if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
    //             ageYear--;
    //             ageMonth += 12;
    //         }

    //         if (ageDay < 0) {
    //             const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    //             ageDay += prevMonthDays;
    //             ageMonth--;
    //         }

    //         setDayOutput(ageDay);
    //         setMonthOutput(ageMonth);
    //         setYearOutput(ageYear);
    //     } else {
    //         setDayOutput('- -');
    //         setMonthOutput('- -');
    //         setYearOutput('- -');
    //     }
    // };

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
                                onChange={ (e) =>  setDay(e.target.value) }
                            />
                            <p className="error">{error.day}</p>
                        </div>
                        <div className="input">
                            <label htmlFor="month">Month</label>
                            <input
                                type="number"
                                name="month"
                                id="month"
                                value={month}
                                onChange={(e) => setMonth(e.target.value) }
                            />
                            <p className="error">{error.month}</p>
                        </div>
                        <div className="input">
                            <label htmlFor="year">Year</label>
                            <input
                                type="number"
                                name="year"
                                id="year"
                                value={year}
                                onChange={(e) => setYear(e.target.value) }
                            />
                            <p className="error">{error.year}</p>
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
