import Awards from "../../components/home/awards/Awards"
import ConceptPanel from "../../components/home/concept/Concept"
import DigitalBank from "../../components/home/digital/Digital"
import EventNumbers from "../../components/home/event-numbers/EventNumbers"
import Offers from "../../components/home/offers/Offers"
import BankerPanel from "../../components/home/personal-banker-panel/BankerPanel"
import Products from "../../components/home/products/Products"
import Select from "../../components/home/select-a-set/Select"
import NavPoint from "../../components/nav-point/NavPoint"
import Footer from "../../components/shared/footer/Footer"

function Home() {
    return (
        <>
            <main className="w-full m-auto">
                <h6 className="text-xs text-gray-500 mt-28 mb-14 w-9/12 m-auto">მთავარი</h6>
                <ConceptPanel />
                <h1 className="text-4xl font-medium mb-32 2xl:w-9/12 m-auto md:w-11/12 sm:w-10/12 max-[640px]:w-10/12">გამოიწერეთ თიბისი კონცეპტის ნაკრები და ისარგებლეთ როგორც საბანკო, ისე არასაბანკო უპირატესობებით.</h1>
                <NavPoint />
                <Select />
                <EventNumbers />
                <Offers />
                <DigitalBank />
                <Products />
                <BankerPanel />
                <Awards />
            </main>
        </>
    )
}
export default Home