import React from 'react';
import  ReactDOM  from 'react-dom/client';

// const h1=React.createElement("h1",{},"Hi Everyone")

const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(h1)
// const element=<h1>HEllo World    </h1>

// ReactDOM.render(element,document.getElementById('root'))

const heading= (
    <h1> HEllo World</h1>
)
const Title=()=>{
    return (
        <h1>Hi I am Title</h1>
    )
}
const HeaderComponent=()=>{
    return(

        <div>
            {console.log(heading)}
            {Title() }
                <h1>Hello World from HeaderComponent</h1>
                <h2> Myselg</h2>
        </div>

    );
}

root.render(<HeaderComponent />)

