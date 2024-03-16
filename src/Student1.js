import React from 'react';

class Student1 extends React.Component {

    componentWillUnmount() {
        alert("ComponentWillUnmount is called");
    }

    render(){
        return(
            <div>
                <h1>Student Component</h1>
            </div>
        )
    }
}

export default Student1;