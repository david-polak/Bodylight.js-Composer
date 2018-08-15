import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toast } from 'react-toastify'

import { Checkbox, Rail, Form, Dropdown, Header, Grid, Divider, Transition, Segment } from 'semantic-ui-react'

import ValueProviderDropdown from '@components/ValueProviderDropdown'
import FunctionEditor from '@components/FunctionEditor'

import update from 'immutability-helper'

import { configAnimateTextUpdate, configAnimateTextRemove } from '@actions/actions'

class ConfigAnimateText extends Component {
  constructor (props) {
    super(props)

    this.getConfig = this.getConfig.bind(this)
    this.handleConfigChange = this.handleConfigChange.bind(this)
    this.handleValueProviderOnClear = this.handleValueProviderOnClear.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  getConfig () {
    const parent = this.props.configAnimateText[this.props.parent]
    if (parent !== undefined && parent[this.props.name] !== undefined) {
      return parent[this.props.name]
    }
    // default configuration
    return update(this.props.defaultConfigAnimateText, {})
  }

  handleConfigChange (e, {name, value, checked}) {
    var config = this.getConfig()
    if (config[name] === undefined) {
      toast.error(`${name} is not a valid configuration option for Animate Text`)
    }

    config = update(config, {[name]: {$set: value}})

    this.props.configAnimateTextUpdate(
      this.props.name,
      this.props.parent,
      config
    )
  }

  handleValueProviderOnClear () {
    this.props.configAnimateTextRemove(
      this.props.name,
      this.props.parent
    )
  }

  render () {
    const config = this.getConfig()
    return (
      <Segment>
        <Header as="h2">{this.props.parent}.{this.props.name}</Header>

        <ValueProviderDropdown
          name='valueProvider'
          value={config.valueProvider}
          onChange={this.handleConfigChange}
          onClear={this.handleValueProviderOnClear}
        />

        <Divider hidden/>

        {this.renderForm(config)}

      </Segment>
    )
  }

  renderForm (config) {
    if (config.valueProvider !== null) {
      return (
        <Form>
          <Form.Field>
            <label>{'Value transform function'}</label>
            <FunctionEditor
              name='transform'
              value={config.transform}
              onChange={this.handleConfigChange}
            />
          </Form.Field>

          <Form.Field>
            <label>{'Visibility function'}</label>
            <FunctionEditor
              name='visible'
              value={config.visible}
              onChange={this.handleConfigChange}
              typeof='boolean'
            />
          </Form.Field>
        </Form>
      )
    }
    return null
  }
}

function mapStateToProps ({ configAnimateText, defaultConfigAnimateText }) {
  return { configAnimateText, defaultConfigAnimateText }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({configAnimateTextUpdate, configAnimateTextRemove}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ConfigAnimateText)
