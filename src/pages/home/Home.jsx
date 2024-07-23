import ConceptPanel from "../../components/home/concept/Concept"
import EventNumbers from "../../components/home/event-numbers/EventNumbers"
import Offers from "../../components/home/offers/Offers"
import Select from "../../components/home/select-a-set/Select"
import NavPoint from "../../components/nav-point/NavPoint"

function Home() {
    return (
        <>
            <main className="w-9/12 m-auto">
                <h6 className="text-xs text-gray-500 mt-28 mb-14">მთავარი</h6>
                <ConceptPanel />
                <h1 className="text-4xl font-medium mb-32">გამოიწერეთ თიბისი კონცეპტის ნაკრები და ისარგებლეთ როგორც საბანკო, ისე არასაბანკო უპირატესობებით.</h1>
                <NavPoint />
                <Select />
                <EventNumbers />
                <Offers />
            </main>
        </>
    )
}
export default Home