import React, { Component, createContext } from "react"

export const namectx = createContext(null);
class Context extends Component {

    constructor(){
        super();
        this.changename = this.changename.bind(this);
    }
    state = {
        name: "Ifeoluwa"
    }

    changename(name){
        this.setState({name: name})
    }

    render(){
        return (
            <namectx.Provider value={[this.state.name, this.changename]}>
                {this.props.children}
            </namectx.Provider>
        )
    }
}

export default Context;