import React from 'react'
import { withRouter } from 'react-router-dom'
import './List.css'

@withRouter
class List extends React.Component {
    goToDetail () {
        const { history } = this.props
        history.push('/detail')
    }
    render () {
        const { list } = this.props
        return (
            <div className="list" onClick={() => this.goToDetail()}>
               <dl>
                    <dt> 
                        <span><img src={list.promote_tag} alt=""/></span>
                        <img src={list.image} alt="" />
                    </dt>
                    <dd><p> {list.name}</p></dd>
               </dl>
            </div>
        )
    }
}
export default List