import { getFeaturedEvents } from "../helpers/api";
import EventList from "../components/events/EventList";

const HomePage = (props) => {

    const {featuredEvents} = props;

    return <div>
        <EventList items={featuredEvents}/>
    </div>
}

export async function getStaticProps(){

    const featuredEvents = await getFeaturedEvents();
    return{
        props: {
            featuredEvents
        },
        revalidate: 600
    }
}

export default HomePage;