import React from 'react'
import styled from 'styled-components';


const Styles = styled.div`
    .formattedTitle {
        text-align: left;
        margin: auto;
        padding: 25px;
        font-family: "titillium-web", sans-serif;
        font-weight: 520;
        font-style: normal;
    }

    .formattedText {
        text-align: left;
        margin: auto;
        padding-left: 50px;
        font-family: "titillium-web", sans-serif;
        font-style: normal;
        line-height: 27px;
    }
`;

export default function Home() {
    return (
        <div>
            <Styles>
            <title>Armaan Punj's Website</title>

            <h2 className="formattedTitle">About</h2>
            <p className="formattedText">
                As a Biostatistics and Computer Science double major from Cary, NC at UNC - Chapel Hill, Armaan loves all things STEM! He's conducted research at a pharmacoengineering lab at UNC, educated senior citizens on useful technological topics, programmed his own game in python called 'Demon Attack', and currently conducts ML and Computer Vision research to improve basketball performance. Apart from his experiences, Armaan is a team-player, competetive learner, and humble entrepreneur. He has two dogs, both Australian Shepherd and Poodle Mixes, named Aura and Zen and loves playing with them and petting their super soft fur. In his free time, Armaan loves traveling; in the last year, he's been to Myrtle Beach, Atlanta, San Diego, and Charlotte!
                </p>

        <h2 className="formattedTitle">Education</h2>
        <ul className="formattedText">
            <li>BSPH in Biostatistics and BS in Computer Science at <em>UNC-Chapel Hill</em> <em>(Aug 2022 - Present)</em></li>
            <li>Enloe Magnet High School <em>(Aug 2018 - June 2022)</em></li>
        </ul>

        </Styles>
        </div>
    )

}