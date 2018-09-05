import React, { Component, Fragment } from 'react'
import { Dropdown, Grid, Header, Divider } from 'semantic-ui-react'

import ComplexAttribute from '../../../ComplexAttribute'
import GridRow from '../../../GridRow'
import ButtonLink from '@components/ButtonLink'
import generateID from '@helpers/generateID'
import update from 'immutability-helper'

import Dataset from './Dataset'

class Datasets extends Component {
  constructor (props) {
    super(props)
    this.handleDatasetAdd = this.handleDatasetAdd.bind(this)
    this.handleDatasetRemove = this.handleDatasetRemove.bind(this)
  }

  handleDatasetAdd () {
    let datasets = this.props.config
    const id = generateID()
    const defaultConfig = {
      id,
      name: '',
      mode: 'lines',
      other: '() => ({})',
      line: {
        color: null,
        width: 2,
        shape: 'linear',
        smoothing: 1,
        dash: 'solid',
        simplify: true
      },
      x: {
        typeof: 'number',
        value: 0,
        time: true,
        provider: null,
        'function': null
      },
      y: {
        typeof: 'number',
        value: 0,
        time: false,
        provider: null,
        'function': null
      },
      maxSamples: {
        typeof: 'number',
        value: 100,
        complex: false,
        provider: null,
        function: null
      }
    }

    datasets = update(datasets, {
      [id]: {$set: defaultConfig}
    })

    this.props.onChange(null, {name: this.props.name, value: datasets})
  }

  handleDatasetRemove (e, {name, value}) {
    const datasets = update(this.props.config, { $unset: [name] })
    this.props.onChange(e, {name: this.props.name, value: datasets})
  }

  renderDatasets () {
    const out = []
    Object.entries(this.props.config).forEach(([id, dataset]) => {
      out.push(
        <Dataset key={id}
          name={`${this.props.name}.${id}`}
          config={dataset}
          onChange={this.props.onChange}
          onRemove={this.handleDatasetRemove}
        />
      )
    })
    return out
  }

  render () {
    return <Fragment>
      {this.renderDatasets()}
      <Divider hidden/>
      <Grid verticalAlign='middle' celled='internally'>
        <GridRow label='' compact={true}>
          <ButtonLink onClick={this.handleDatasetAdd}>Add dataset</ButtonLink>
        </GridRow>
      </Grid>
    </Fragment>
  }
}

export default Datasets