//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {removePost} from '../redux/actions'
import {withRouter} from 'react-router'

function mapStateToProps(state){
  return {
    //posts: state
    posts: state.posts, 
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch){
  return   bindActionCreators(actions, dispatch)
  //this.props.removePosts

}
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App
