import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../data";

const FilteredEvents = () => {
  const router = useRouter();

  const filterData = router.query.filteredEvents;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

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
    return <p>Invalid filter. Please do not manualy insert url address.</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numericYear,
    month: numericMonth,
  });

  if(!filteredEvents || filteredEvents.length === 0){
    return <p>Sorry, no events found for such a criteria.</p>
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;
