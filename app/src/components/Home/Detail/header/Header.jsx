import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './header.css'
import { ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';


const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
@withRouter
class Test extends React.Component {
    back() {
        const { history } = this.props
        history.goBack(-1)
    }
    constructor() {
        super();
        this.state = {
            clicked: 'none',
            clicked1: 'none',
            clicked2: 'none',
        };
    }

    dataList = [
        { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
        { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
        { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
        { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
        { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
    ].map(obj => ({
        icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
        title: obj.title,
    }));
    showShareActionSheet = () => {
        ActionSheet.showShareActionSheetWithOptions({
            options: this.dataList,
            // title: 'title',
            message: 'I am description, description, description',
        },
            (buttonIndex) => {
                this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
                // also support Promise
                return new Promise((resolve) => {
                   // Toast.info('closed after 100ms');
                    setTimeout(resolve, 100);
                });
            });
    }
   
    render() {
        return (
            <div>
                <div className="head">
                    <ul>
                        <li><b onClick={this.back.bind(this)}>←</b></li>
                        <li><a href="#detail">商品详情</a> <a href="#anxin">安心保障</a></li>
                        <li onClick={this.showShareActionSheet}>分享</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Test