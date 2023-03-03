import { getFeaturedEvents } from "../helpers/api";
import EventList from "../components/events/EventList";
import NewsletterRegistration from "../components/input/newsletter-registration";

const HomePage = (props) => {

    const {featuredEvents} = props;

    return <div>
        <NewsletterRegistration/>
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