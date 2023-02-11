function planet1(data) {
    // return `
    // <div class="planetsContainer__planet">
    //         <div class="planetsContainer__planet2">
    //             <div><img src="../img/download.jpg" alt="Galaxy">
    //         </div> <br> <br>
    //             <h3>Planet Name: ${data.name}</h3>
    //             <h3>population: ${data.population}</h3>
    //             <h3>climate: ${data.climate}</h3>
    //             <h3>gravity: ${data.gravity}</h3>
    //         </div>
    // </div>
    // `

    return `
    <div class="planetsContainer__planet">
        <div class="planetsContainer__planet2">
        <img src="../img/download.jpg" alt="Galaxy">
            <table>
                <tbody>
                    <div >
                        <tr>
                            <td><h3 class="class1">Planet Name:</h3></td>
                            <td><h4 class="class1">${data.name}</h4></td>
                        </tr>
                    </div>
                    <div class="class2">
                        <tr>
                            <td><h3 class="class1">Population:</h3></td>
                            <td><h4 class="class1">${data.population}</h4></td>
                        </tr>
                    </div>    
                    <div class="class3">    
                        <tr>
                            <td><h3 class="class1">Climate:</h3></td>
                            <td><h4 class="class1">${data.climate}</h4></td>
                        </tr>
                    </div>    
                    <div class="class4">    
                        <tr>
                            <td><h3 class="class1">Gravity:</h3></td>
                            <td><h4 class="class1">${data.gravity}</h4></td>
                        </tr>
                    </div>
                </tbody>
            </table>
    `
}

export default planet1;