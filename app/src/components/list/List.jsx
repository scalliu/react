import React, { Component } from 'react'


class List extends Component {
    render() {
        const { url, title } = this.props;
        return (
            <div>
                <div className="ssName=cont">
                    <div clas="left">
                        <img src={url} alt="" /></div>
                    <div className="right">
                        <h5>{title}</h5>
                    </div>
                </div>
            </div>
        )
    }
}
export default List