import { getAllEvents } from "../../helpers/api";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { Fragment } from "react";
import { useRouter } from "next/router";

const AllEventsPage = (props) => {
  const {events} = props;

  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export async function getStaticProps(){

  const events = await getAllEvents();

  return {
    props: {
      events
    },
    revalidate: 180
  }
}

export default AllEventsPage;
