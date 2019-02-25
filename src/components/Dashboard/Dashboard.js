import React, { Component } from 'react'



class Dashboard extends Component {
    _isMounted = false
    constructor(props) {
        super(props)

    }




    async componentDidMount() {
        this._isMounted = true
    }



    render() {

        return (

            <div className="dashboard container">
                <div className="row">
                    <div className="col s16 m7  darken-2">

                    </div>
                    <div className="col s12 m3 offset-m1">

                    </div>

                </div>

            </div>

        )
    }

}
//  

export default Dashboard