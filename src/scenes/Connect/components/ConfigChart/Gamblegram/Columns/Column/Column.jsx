import React, { Component, Fragment } from 'react'
import { Input, Checkbox, Dropdown, Grid, Divider } from 'semantic-ui-react'

import GridRow from '@scenes/Connect/components/GridRow'
import Collapsable from '@scenes/Connect/components/Collapsable'
import ButtonLink from '@components/ButtonLink'
import FunctionEditor from '@components/FunctionEditor'

import Items from './Items'

class Column extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const config = this.props.config
    const name = this.props.name
    return <Fragment>
      <GridRow label='Name:'>
        <Input
          name={`${name}.name`}
          value={config.name}
          onChange={this.props.onChange}
        />
      </GridRow>

      <Items
        name={`columns.${this.props.config.id}.items`}
        config={config.items}
        onChange={this.props.onChange}
        />

      <GridRow label='Custom:'>
        <FunctionEditor
          name={`${name}.other`}
          value={config.other}
          onChange={this.props.onChange}
          typeof='object'
          disableRemove={true}
        />
      </GridRow>

      <GridRow label='' compact={true}>
        <ButtonLink name={config.id} onClick={this.props.onRemove}>remove dataset</ButtonLink>
      </GridRow>

    </Fragment>
  }
}

export default Column