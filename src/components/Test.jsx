import React from "react";

// function Test(){
//     return <div>This is tesst component</div>
// }
// export default Test;

export default function Test(){
    return <div className="test-card">
        <Avatar/>
       < Intro/>
       <SkillList/>
    </div>
}

function Avatar(){
return <img width={300} src="https://media.licdn.com/dms/image/C5603AQEkYs2WR7Hw-w/profile-displayphoto-shrink_800_800/0/1568866472270?e=2147483647&v=beta&t=1ABpnUtz645mvnEOJSTJzYpjUnBtCTXylQ_iCzGQAiI" alt="" />
}
function Intro(){
    return <div>
        <h2>Jordan Walke</h2>
        <p>Jordan Walke, a software engineer at Facebook, founded React in 2011: </p>
    </div>
}
function SkillList(){
    return <div className="flex skill-list">
        <Skill name="React" emoji="💪" color="yellow"/>
        <Skill name="javascript" emoji="💪"/>
        <Skill name="html/css" emoji="💪" color="yellow" />
        <Skill name="jQuery" emoji="💪"/>
    </div>
}
function Skill(props){
    return <span style={{backgroundColor: props.color, padding:"0.5rem", borderRadius: "6px"}}>
        <strong>{props.name}</strong>
        <strong>{props.emoji}</strong>
    </span>
}