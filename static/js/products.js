let oil_tank = document.getElementById('oil-tank');
let gas_tank = document.getElementById('gas-tank');
gas_tank.addEventListener('click', (e)=>{
    e.preventDefault();
    let tank = document.getElementById('tank-content');
    let uiString = `<div class="content-info">
                            <div class="image">
                                <img src="https://ariontechsol.com/images/gas-tank.png" alt="">
                            </div>
                            <div class="text">
                                <h3>Gas Tank</h3>
                                <ul class="mt-3">
                                    <li>Oil Link™ is a robust, autonomous system for remote monitoring of gas tank
                                        levels via the internet.
                                    </li>
                                    <li>The system is easily installed on all types of oil tanks – including LPG, propane, butane and other gases
                                        – and works reliably and accurately in any
                                        location.
                                    </li>
                                    <li>Oil Link™ can also monitor other parameters, such as gas-meter readings.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-3">
                            <h5>Advantages</h5>
                            <ul>
                                <li>Reduction of logistics costs by at least 20%, thanks to optimal delivery schedules
                                </li>
                                <li>Elimination of breakdowns due to lack of fuel and emergency deliveries</li>
                                <li>Reduction of the CO2 footprint thanks to the reduction of deliveries</li>
                                <li>Improved purchase planning</li>
                                <li>Detailed visualization of customers’ consumption</li>
                            </ul>
                        </div>`;
    tank.innerHTML = uiString;
    gas_tank.classList.add('btn-color');
    oil_tank.classList.remove('btn-color');
})
oil_tank.addEventListener('click', (e)=>{
    e.preventDefault();
    let tank = document.getElementById('tank-content');
    let uiString = `<div class="content-info">
                            <div class="image">
                                <img src="https://ariontechsol.com/images/oil-lubircant-tank.png" alt="">
                            </div>
                            <div class="text">
                                <h3>Oil Lubricant Tank</h3>
                                <ul class="mt-3">
                                    <li>Oil Link™ is a robust, autonomous system for remote monitoring of oil and
                                        lubricant tank levels via the internet.
                                    </li>
                                    <li>The system is easily installed on all types of oil tanks – including heating
                                        oil, diesel, heavy oil and lubricants – and works reliably and accurately in any
                                        location.
                                    </li>
                                    <li>Oil Link™ can also monitor other parameters, such as fuel temperature or the
                                        status of a burner or any other relay.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-3">
                            <h5>Advantages</h5>
                            <ul>
                                <li>Reduction of logistics costs by at least 20%, thanks to optimal delivery schedules
                                </li>
                                <li>Elimination of breakdowns due to lack of fuel and emergency deliveries</li>
                                <li>Reduction of the CO2 footprint thanks to the reduction of deliveries</li>
                                <li>Improved purchase planning</li>
                                <li>Detailed visualization of customers’ consumption</li>
                            </ul>
                        </div>`;
    tank.innerHTML = uiString;
    oil_tank.classList.add('btn-color');
    gas_tank.classList.remove('btn-color');
})
