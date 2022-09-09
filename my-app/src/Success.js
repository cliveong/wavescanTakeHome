import { useEffect, useState } from "react";

const Success = () => {
    const [arrayOfInfo, setArrayOfInfo] = useState([]);

    useEffect(() => {
        fetch("https://wavescan-internship.saurabhmudgal.repl.co/success")
            .then(res => res.json())
            .then(data => setArrayOfInfo(data))
            .catch(e => console.log(e)) 
    }, []);

    const returnTable = (data) => {
        return (data.map((item) => {
            console.log(item)
            return (
                <tr>
                    <td>{item.scannerName}</td>
                    <td>{item.ipAddress}</td>
                    <td>{item.scannerSpeed}</td>
                    <td>{item.isAvailable}</td>
                    <td><button>Connect</button></td>
                </tr>
            );
        }))
    }

    return (
        <div>
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
    )
}

export default Success