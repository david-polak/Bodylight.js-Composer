import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { getApplicationKey, getPreview } from '@reducers'

import Preview from '@scenes/Preview'
import Design from '@scenes/Design'
import AddModel from '@scenes/Add/AddModel'

class DisplayContainer extends Component {
  constructor (props) {
    super(props)
    this.getDesignKey = this.getDesignKey.bind(this)
  }

  getDesignKey () {
    return <Design key={this.props.appkey}/>
  }

  render () {
    return <Fragment>
      <div id='DisplayContainer'>
        {this.props.preview === false && this.getDesignKey()}
        {this.props.preview && <Preview/>}
        <Route path={`${process.env.PATH}/add/model`} component={AddModel} />
      </div>
    </Fragment>
  }
}

export default connect(
  state => ({
    appkey: getApplicationKey(state),
    preview: getPreview(state),
  })
)(DisplayContainer)
