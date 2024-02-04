import Contacts from "../components/contact/contacts";
import Schedule from "../components/contact/schedule";
import Crew from "../components/crew/crew";
import Hero from "../components/hero/hero";
import Lower from "../components/lower/lower";
import Reviews from "../components/reviews/reviews";
import Services from "../components/services/services";

export default function Home() {
    return(
        <>
            <Hero />
            <Services />
            <Reviews />
            <Lower />
            <Crew />
            <Schedule />
            <Contacts />
        </>
    )
}