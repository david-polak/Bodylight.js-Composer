import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Input } from 'semantic-ui-react'
import { configGetToggle } from '@reducers'
import { updateConfig, renameToggle } from '@actions'

import GridRow from '@components/GridRow'
import ComplexAttribute from '@components/ComplexAttribute'
import Events from '../Events'

class ConfigToggle extends Component {
  constructor(props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
    this.rename = this.rename.bind(this)
  }

  rename(e, { value }) {
    this.props.renameToggle(this.props.toggle, value)
  }

  handleOnChange(e, { name, value, checked }) {
    if (typeof checked !== 'undefined' && name !== 'mode') {
      value = checked
    }
    this.props.updateConfig(this.props.toggle, name, value)
  }

  render() {
    const config = this.props.config

    return <Fragment>
      <GridRow label='Name'>
        <Input
          name='name'
          value={this.props.toggle.name}
          onChange={this.rename}
        />
      </GridRow>
      <GridRow label='Target:' key={`target`}>
        <ComplexAttribute nofunc
          name='target'
          attribute={config.target}
          onChange={this.handleOnChange}
        />
      </GridRow>
      <GridRow label='On toggle ON:' key={`onToggleOn`}>
        <ComplexAttribute
          name='onToggleOn'
          attribute={config.onToggleOn}
          onChange={this.handleOnChange}
        />
      </GridRow>
      <GridRow label='On toggle OFF:' key={`onToggleOff`}>
        <ComplexAttribute
          name='onToggleOff'
          attribute={config.onToggleOff}
          onChange={this.handleOnChange}
        />
      </GridRow>
      <GridRow label='Enabled'>
        <ComplexAttribute
          name='enabled'
          label='Toggle is enabled'
          attribute={config.enabled}
          onChange={this.handleOnChange}
        />
      </GridRow>
      <GridRow label='Visible'>
        <ComplexAttribute
          name='visible'
          label='Toggle is visible'
          attribute={config.visible}
          onChange={this.handleOnChange}
        />
      </GridRow>
      <Events
        widget={this.props.toggle}
        config={config}
      />
    </Fragment>
  }
}

export default connect(
  (state, props) => ({
    config: configGetToggle(state, props.toggle.id)
  }),
  dispatch => bindActionCreators({
    updateConfig,
    renameToggle
  }, dispatch)
)(ConfigToggle)
