import React, { Component } from 'react';
import { Route, NavLink, withRouter} from 'react-router-dom'
import './App.css';
import './assets/font-size'
import { ROUTER_MAP } from './router/routerMap'
import Footer from './views/component/footer'
import AddCartBar from './components/Common/AddCartBar'
import { connect } from 'react-redux';
import { addProductAction } from './store/action/shopCar'

@withRouter
@connect(mapStateToProps)
class App extends Component {
  addProduct () {
    const { dispatch } = this.props
    dispatch(addProductAction())
  }
  render() {
    const { location, total } = this.props
    return (
      <div className='app'>
        <div className='wrap'>
          {
            ROUTER_MAP.ROUTE.map((item, idx) => {
              return <Route key={idx} exact path={item.path} component={item.component}></Route>
            })
          }
         
        </div>
        <div className='nav'>
        {
          /\/detail/.test(location.pathname)
              ? <AddCartBar addCart={this.addProduct.bind(this)} total={total} />
              : ROUTER_MAP.NAV.map((item, idx) => {
                return (
                  <NavLink key={idx} to={item.to}>
                    <Footer text={item.text} icon={item.icon} />
                  </NavLink>
                )
              })
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.shopCar.total
  }
}
export default App;
