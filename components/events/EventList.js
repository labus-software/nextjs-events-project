import EventItem from "./EventItem";
import classes from './event-list.module.css';

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          description={event.description}
          location={event.location}
          title={event.title}
          image={event.image}
          date={event.date}
        />
      ))}
    </ul>
  );
};

export default EventList;
