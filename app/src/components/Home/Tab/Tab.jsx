import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile'
import List from '../List'
import './Tab.css'
//import Banner from '../Banner'

class Tab extends React.Component {
  renderContent = tab => {
    const { productList } = this.props
   // console.log(productList)
    return (
      <div className='tab-count'>
        {
          productList.map((item, idx) => {
            return <List key={idx} list={item} />  })
        }
      </div>
    )
  }
  handleChange(arg) {
    this.props.getInternalId(arg.internal_id)
  }
  render() {
    const { categoryList } = this.props
    for (let item of categoryList) {
      item.title = item.name
    }
    return (
      <div className='tab'>
        <WhiteSpace />
        <Tabs onChange={this.handleChange.bind(this)} tabs={categoryList}>
          {this.renderContent}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}

export default Tab