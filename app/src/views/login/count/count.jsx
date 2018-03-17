import React, { Component } from 'react'
import { List, InputItem, Toast } from 'antd-mobile';
import './count.css'
import { ReactDOM } from 'react-dom';
class ErrorInputExample extends React.Component {
    state = {
        hasError: false,
        value: '',
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('Please enter 11 digits');
        }
    }
    onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            value,
        });
    }
    render() {
        return (
            <div>
                {/* <List renderHeader={() => 'Confirm when typing'}> */}
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.value}
                        className="list"
                    ></InputItem>
                <input type="text" placeholder="请输入验证码" maxLength="6" className="inp"/>
                {/* </List> */}
                <div className="mark">
                    验证码
                </div>
            </div>
        );
    }
}

export default ErrorInputExample
