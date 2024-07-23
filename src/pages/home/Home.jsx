import ConceptPanel from "../../components/home/concept/Concept"
import DigitalBank from "../../components/home/digital/Digital"
import EventNumbers from "../../components/home/event-numbers/EventNumbers"
import Offers from "../../components/home/offers/Offers"
import BankerPanel from "../../components/home/personal-banker-panel/BankerPanel"
import Products from "../../components/home/products/Products"
import Select from "../../components/home/select-a-set/Select"
import NavPoint from "../../components/nav-point/NavPoint"

function Home() {
    return (
        <>
            <main className="w-full m-auto">
                <h6 className="text-xs text-gray-500 mt-28 mb-14 w-9/12 m-auto">მთავარი</h6>
                <ConceptPanel />
                <h1 className="text-4xl font-medium mb-32 w-9/12 m-auto">გამოიწერეთ თიბისი კონცეპტის ნაკრები და ისარგებლეთ როგორც საბანკო, ისე არასაბანკო უპირატესობებით.</h1>
                <NavPoint />
                <Select />
                <EventNumbers />
                <Offers />
                <DigitalBank />
                <Products />
                <BankerPanel />
            </main>
        </>
    )
}
export default Home