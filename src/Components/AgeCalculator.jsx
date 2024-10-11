import './AgeCalculator.modulus.css';

function AgeCalculator() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="top-section">
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="day">Day</label>
                            <input type="number" name="day" id="day"/>
                        </div>
                        <div className="input">
                            <label htmlFor="month">Month</label>
                            <input type="number" name="month" id="month"/>
                        </div>
                        <div className="input">
                            <label htmlFor="year">Years</label>
                            <input type="number" name="year" id="year"/>
                        </div>
                    </div>
                    <button className="submit"><i className="ri-arrow-down-line"></i></button>
                </div>
                <hr />
                <div className="outputs">
                    <div className="output">
                        <div className="years">-- <span>Years</span></div>
                    </div>
                    <div className="output">
                        <div className="months">-- <span>Months</span></div>
                    </div>
                    <div className="output">
                        <div className="days">-- <span>Days</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgeCalculator