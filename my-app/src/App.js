import './App.css';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';


function App() {
    const [inputProjectName, setInputProjectName] = useState("");
    const [inputScanningMode, setInputScanningMode] = useState("");
    const [inputScanDimensionsX, setInputScanDimensionsX] = useState(0);
    const [inputScanDimensionsY, setInputScanDimensionsY] = useState(0);
    const [inputScannerFreq, setInputScannerFreq] = useState(0);
    let navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://wavescan-internship.saurabhmudgal.repl.co/submitForm", {
            method: 'POST',
            body: JSON.stringify({
                projectName: inputProjectName,
                scanningMode: inputScanningMode,
                scanDimensionsX: parseInt(inputScanDimensionsX),
                scanDimensionsY: parseInt(inputScanDimensionsY),
                scannerFrequency: parseFloat(inputScannerFreq),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((data) => {
            console.log(data)
            if (data.status === 200) {
                navigate(`./success`)
            } else if (data.status === 400) {
                alert("Error 400\n Ensure input data is correct/complete")
            } else {
                alert(`Error ${data.status} \n Please try again later`)
            }
        })
        .catch((err) => { 
            alert("Error\n Please try again later")
            console.log(err.message); 
        });
    }

    return (
        <div className='appPage'>
            <form className="form" onSubmit={e => {handleSubmit(e)} }>
                <ul>
                    <li>
                        <label htmlFor="projectName">
                            Project Name
                        </label>
                        <input type="text" name="projectName" id='projectName' 
                        onChange={e => setInputProjectName(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="scanningMode">
                            Scanning Mode
                        </label>
                        <select defaultValue={"--Select--"} name="scanningMode" id='scanningMode'
                        onChange={e => setInputScanningMode(e.target.value)}>
                            <option value="--Select--" disabled>--Select--</option>
                            <option value="GANTRY">Gantry</option>
                            <option value="CRAWLER">Crawler</option>
                            <option value="AUTO">Auto</option>
                            <option value="MANUAL">Manual</option>
                            <option value="ARM">Arm</option>
                        </select>
                    </li>
                    <li>
                        <div>
                            Scan Dimensions (cm)
                        </div>
                        <div className='dimensions'>
                            <div>
                                <label htmlFor="scanDimensionsX">
                                    X
                                </label>
                                <input type="number" step="1" name="scanDimensionsX" id='scanDimensionsX'
                                onChange={e => setInputScanDimensionsX(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="scanDimensionsY">
                                    Y
                                </label>
                                <input type="number" step="1" name="scanDimensionsY" id='scanDimensionsY'
                                onChange={e => setInputScanDimensionsY(e.target.value)}/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="scannerFrequency">
                            Scanner Frequency (GHz)
                        </label>
                        <input type="number" step="0.1" name="scannerFrequency" id='scannerFrequency'
                        onChange={e => setInputScannerFreq(e.target.value)}/>
                    </li>
                    <li>
                        <input className='submitButton' type="submit"/>
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default App;
