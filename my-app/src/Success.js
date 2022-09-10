import { useEffect, useState } from "react";
import "./Success.css"
const Success = () => {
    const [arrayOfInfo, setArrayOfInfo] = useState([]);

    useEffect(() => {
        fetch("https://wavescan-internship.saurabhmudgal.repl.co/success")
            .then(res => res.json())
            .then(data => setArrayOfInfo(data))
            .catch(e => console.log(e)) 
    }, []);

    return (
        <div className="successPage">
            <div className="wrapper">
                <div>
                    <div className="scannerCount">
                        Scanner count: {arrayOfInfo.length}
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Scanner Name
                                </th>
                                <th>
                                IP Address
                                </th>
                                <th>
                                    Scanner Speed
                                </th>
                                <th>
                                    Status
                                </th>
                                <th>
                    
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrayOfInfo.map(item => {
                                return (
                                    <tr>
                                        <td>{item.scannerName}</td>
                                        <td>{item.ipAddress}</td>
                                        <td>{item.scannerSpeed}</td>
                                        <td>{item.isAvailable}</td>
                                        <td><button>Connect</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}

export default Success