import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>Matthew asks</Card.Header>
      <Card.Meta>
        <span className='date'>Would you rather</span>
      </Card.Meta>
      <Card.Description>Be a musician in Nashville...</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href='#'>
        <Icon name='user' />
        View the poll
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleCard
