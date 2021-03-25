import React from 'react';
import './home.css';

function Home () {
    return (
        <div className="container my-5 card">
            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        <img src="https://raw.githubusercontent.com/danacorona/danacorona.github.io/main/images/DanaMain_Edit.jpg" className="danaimg" width="350"/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <h1>Hi, I'm Dana</h1>
                            </div>
                            <div className="row">
                                <p>
                                Great to meet you! I am a web developer based in Austin, TX! Building websites has been a dream of mine for so long and I am very excited that I get to live my dream.<br/><br/>
                                For me, coding has always been a fun challenge! My first line of code I performed was as a little kid on a Nickelodeon forum where they were showing kids how to change the color of their text. I convinced my step father that I NEEDED to change my font color to pink and he helped me!
                                After that, I didn't code much until I got to high school and this really awesome website called MySpace was created. I spent hours making sure that I made my MySpace layout as flashy as possible.<br/><br/>
                                Fast forward to 2018, I was talking to some friends of mine who are developers and they began talking about MySpace. Instantly, I felt nostalgia and wondered why I ever stopped coding! I went home that night and began learning about HTML and CSS and sparked my passion once more. Once I started, I didn't want to stop and decided to pursue coding for my career since I love it so much!<br/><br/>
                                I finally took the jump and became a Full-Time student at the University of Texas' Web Development Boot Camp! I've now graduated and am looking forward to meeting the company of my dreams!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;