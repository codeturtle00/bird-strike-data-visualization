import React from "react";

function Summary() {
    const totalNumIncidents = 0
    const fatalityRate = 0
    return (
        <div>
            <h1>Summary</h1>
            <ul>
                <li>Total number of report incidents: {totalNumIncidents}</li>
                <li>Fatality Rate: {fatalityRate}</li>
                <li>(TODO: other interesting stats)</li>
            </ul>
        </div>
    );
}

export default Summary;