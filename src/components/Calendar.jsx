import React from "react";
import Event from './Event';

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>      
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event ='CSE 95' type='PR' location='EBU3B 1201' color='yellow'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9am</td>
                        <td></td>
                        <Event event ='CSE 105' type='LE' location='WLH 2001' color='green'/>
                        <td></td>
                        <Event event ='CSE 105' type='LE' location='WLH 2001' color='green'/>
                        <td></td>
                        <Event event ='CSE 105' type='LE' location='WLH 2001' color='green'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10am</td>
                        <td></td>
                        <Event event ='COGS 108' type='LE' location='PRICE THTRE' color='pink'/>
                        <td></td>
                        <Event event ='COGS 108' type='LE' location='PRICE THTRE' color='pink'/>
                        <td></td>
                        <Event event ='COGS 108' type='LE' location='PRICE THTRE' color='pink'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event ='CSE 110' type='LA' location = 'EBU3B B240' color='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event ='CSE 110' type='LA' location = 'EBU3B B240' color='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2pm</td>
                        <td></td>
                        <Event event ='CSE 15L' type='LE' location='MOS 0114' color='yellow'/>
                        <td></td>
                        <Event event ='CSE 110' type='LA' location = 'EBU3B B240' color='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3pm</td>
                        <td></td>
                        <Event event ='MATH 181A' type='LE' location = 'MANDE B-210' color='orange'/>
                        <td></td>
                        <Event event ='MATH 181A' type='LE' location = 'MANDE B-210' color='orange'/>
                        <td></td>
                        <Event event ='MATH 181A' type='LE' location = 'MANDE B-210' color='orange'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4pm</td>
                        <td></td>
                        <td></td>
                        <Event event ='MATH 181A' type='DI' location = 'WLH 2209' color='orange'/>
                        <Event event ='COGS 108 LAB' type='LA' location='PETER 102' color='pink'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5pm</td>
                        <td></td>
                        <td></td>
                        <Event event ='CSE 110' type='LE' location = 'PETER 110' color='blue'/>
                        <td></td>
                        <Event event ='CSE 110' type='LE' location = 'PETER 110' color='blue'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">6pm</td>
                        <td></td>
                        <td></td>
                        <Event event ='CSE 110' type='LE' location = 'PETER 110' color='blue'/>
                        <Event event ='CSE 105' type='DI' location = 'YORK 2722' color='green'/>
                        <Event event ='CSE 110' type='LE' location = 'PETER 110' color='blue'/>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;