import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import image_1 from "../../../assets/images/image-2.png"
import image_2 from "../../../assets/images/image-4.png"
import image_3 from "../../../assets/images/image-3.png"

function Products() {
    const products =
        [
            {
                image: image_1,
                title: "ინვესტიციები",
                name: "MP დეველოპმენტი - აშშ და ევროს ობლიგაციები"
            },
            {
                image: image_2,
                title: "ჯაზ ფესტივალის შეთავაზებები",
                name: "IVERIA BEACH - დაიბრუნეთ 30%"
            },
            {
                image: image_3,
                title: "ავტო თეგეტა მოტორსი",
                name: "თეგეტა მოტორსი - 50% ფასდაკლება"
            }
        ];
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    };
    return (
        <>
            <section className="w-9/12 m-auto mb-28">
                <h2 className="text-2xl text-gray-950 font-bold">შეთავაზებები</h2>
                <div className="w-full">
                    <div className="h-full m-auto">
                        <Slider {...settings}>
                            {
                                products.map((product, index) => {
                                    return (
                                        <div className="p-3" key={index}>
                                            <div className="w-full bg-white relative h-[400px] rounded-lg overflow-hidden border-solid border-gray-300 border-[0.5px]" >
                                                <div className="w-full">
                                                    <img src={product.image} className="object-contain w-full" />
                                                </div>
                                                <div className="p-7">
                                                    <p className="text-gray-400 text-xs">{product.title}</p>
                                                    <h3 className="font-bold text-lg">{product.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Products