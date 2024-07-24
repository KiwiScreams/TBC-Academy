import appstore from "../../../assets/images/app.svg"
import googleplay from "../../../assets/images/google.svg"
import digital from "../../../assets/images/image-8.png"
function DigitalBank() {
    return (
        <>
            <section className="w-full bg-white pt-10 mb-28">
                <div className="w-9/12 m-auto flex items-center justify-between max-[640px]:flex-col">
                    <div>
                        <h2 className="text-2xl font-bold mb-5">ციფრული ბანკი</h2>
                        <p className="mb-3 text-gray-500">შეასრულეთ საბანკო ოპერაციები დისტანციურად, ციფრული ბანკის დახმარებით</p>
                        <div className="flex justify-between items-center w-fit gap-2">
                            <div className="py-4 px-8 border-solid border-gray-200 border">
                                <img src={googleplay} alt="" />
                            </div>
                            <div className="py-4 px-8 border-solid border-gray-200 border">
                                <img src={appstore} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-72">
                        <img src={digital} alt="" className="w-full" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default DigitalBank