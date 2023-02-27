import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../helpers/api";

const FilteredEvents = (props) => {
  const router = useRouter();

  // const filterData = router.query.filteredEvents;

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numericYear = +filteredYear;
  // const numericMonth = +filteredMonth;

  if (props.hasError) {
    return <p>Invalid filter. Please do not manualy insert url address.</p>;
  }

  const filteredEvents = props.events;

  if(!filteredEvents || filteredEvents.length === 0){
    return <p>Sorry, no events found for such a criteria.</p>
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export async function getServerSideProps(context){

  const {params} = context;

  const filterData = params.filteredEvents;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numericYear = +filteredYear;
  const numericMonth = +filteredMonth;

  if (
    isNaN(numericYear) ||
    isNaN(numericMonth) ||
    numericYear > 2022 ||
    numericYear < 2018 ||
    numericMonth > 12 ||
    numericMonth < 1
  ) {
    return {
      props: {

        hasError: true
      }
    }
  }

  const filteredEvents = await getFilteredEvents({
    year: numericYear,
    month: numericMonth,
  });

  return{
    props: {
        events: filteredEvents
    }
  }
 
}

export default FilteredEvents;
