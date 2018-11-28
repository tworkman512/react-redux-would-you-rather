import React, { Component } from 'react'
import Card from '../components/Card'
import { Container, Tab } from 'semantic-ui-react'

export default class Home extends Component {
  render() {
    const panes = [
      {
        menuItem: 'Unanswered Questions',
        render: () =>
        <Tab.Pane>
          Tab 1 Content
          <Card />
        </Tab.Pane>
      },
      {
        menuItem: 'Answered Questions',
        render: () =>
        <Tab.Pane>
          Tab 2 Content
          <Card />
        </Tab.Pane>
      },
    ]
    return (
      <div>
        HOMEPAGE CONTAINER
        <Container>
          <Tab panes={panes} />
        </Container>
      </div>
    )
  }
}
