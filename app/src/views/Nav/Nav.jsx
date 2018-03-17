import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import './nav.css'
class Demo extends React.Component {
    renderContent = tab =>
        (<div className="tabs">
            <p>{tab.title}</p>
        </div>);

    render() {
        const tabs = [
            { title: '热卖' },
            { title: '火锅' },
            { title: '水果' },
            { title: '蔬菜' },
            { title: '乳品' },
            { title: '肉蛋' },
            { title: '零食' },
            { title: '酒饮' },
            { title: '水产' },
            { title: '熟食'}
        ];

        return (
            <div>
                <WhiteSpace />
                <Tabs tabs={tabs}>
               
                    {this.renderContent}
                </Tabs>
                <WhiteSpace />
            </div>
        );
    }
}

export default Demo