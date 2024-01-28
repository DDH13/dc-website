import React from 'react';

function AboutUs() {
    return (
        <div id="who-are-we" className="componentdiv row">
            <div className="col w-50 mincompdiv mobile-none">
                <br /><br /><br /><br /><br />
                <img src="assets/images/board/2024.jpg" alt="who-are-we" className="img-fluid rounded-3" />
            </div>
            <div className="col w-50 mincompdiv">
                <br /><br /><br /><br /><br /><br />
                <h1>About Us</h1>
                <p>The Debaters’ Council of Sri Lanka serves as a national level body that oversees English Debating in
                    Sri Lanka at a secondary and tertiary level. It was established in 2006 as a society and registered
                    as a company limited under guarantee in 2009.</p>
                <p>The Board of Directors for the year 2024/2025</p>
                <p>Names (left to right): Anah Cassim, <b>Mithsandi Seneviratne (Secretary), Dineth Hettiarachchi (Chairperson)</b>,&nbsp;&nbsp; Gavin Senaratne, Chanidu Ratnayake.
                    Absent : Amindri Sinnathamby (Treasurer), Viren Beruwalage</p>
            </div>
            <br />
            <div><a href="#what-do-we-do"><i className="fa fa-chevron-down cd2"></i></a></div>
        </div>
    );
}

export default AboutUs;
