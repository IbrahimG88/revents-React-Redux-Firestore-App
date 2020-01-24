import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'

/**
 * we will loop over the events array that was passed as  a prop
 * we will the EventListItem an id as events.id
 * we will use the event prop as this.props.event in the 
 * EventListItem component as you can see there
 */

class EventList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.events.map(event => (
                 <EventListItem key={event.id} 
                 event= {event}/>   
                ))}
               
            </Fragment>
        )
    }
}

export default EventList