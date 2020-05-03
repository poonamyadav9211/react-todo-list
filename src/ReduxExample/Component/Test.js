import React, { Component } from 'react'
import { connect } from 'react-redux';

class Test extends Component {
    render() {
        return (
            <div>
                <h1>Test Application!!</h1>
            </div>
        )
    }
}

const mapStateToProps = state =>({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps) (Test);