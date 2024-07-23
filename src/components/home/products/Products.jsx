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
                title: "ციფრული",
                name: "თიბისი კონცეპტის ციფრული ნაკრები განკუთვნილია მათთვის, ვისთვისაც საბანკო მომსახურებით სარგებლობა ყოველდღიურობის ნაწილია, ვინც..."
            },
            {
                image: image_2,
                title: "პრემიუმი",
                name: "თიბისი კონცეპტის მომხმარებლებთან ურთიერთობის ერთ-ერთი ფორმატი - პრემიუმ ნაკრები. სხვა საბანკო და არასაბანკო უპირატესობებთან ერთად"
            },
            {
                image: image_3,
                title: "360",
                name: "თიბისი კკონცეპტის 360 ნაკრები განკუთვნილია მათთვის, ვისაც სხვა საბანკო და არასაბანკო უპირატესობებთან ერთად, კიდევ უფრო მეტი ფინანსური ინსტრუმენტი..."
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
                <h2 className="text-2xl text-gray-950 font-bold mb-9">პროდუქტები</h2>
                <div className="w-full">
                    <div className="h-full m-auto">
                        <Slider {...settings}>
                            {
                                products.map((product, index) => {
                                    return (
                                        <div className="p-3" key={index}>
                                            <div className="w-full bg-white relative h-[400px] rounded-lg overflow-hidden border-solid border-gray-300 border-[0.5px]" >
                                                <div className="w-full">
                                                    <img src={product.image} className="h-[200px]" />
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="font-bold text-lg mb-3">{product.title}</h3>
                                                    <p className="text-gray-600 text-sm">{product.name}</p>
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