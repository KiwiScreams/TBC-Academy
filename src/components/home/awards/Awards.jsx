import { NavLink } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import image_1 from "../../../assets/images/image-10.png"
import image_2 from "../../../assets/images/image-11.png"
import image_3 from "../../../assets/images/image-12.png"
function Awards() {
    const awards =
        [
            {
                image: image_1,
                title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2024",
                name: "The Global Finance"
            },
            {
                image: image_2,
                title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2023",
                name: "Euromoney"
            },
            {
                image: image_1,
                title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2022",
                name: "The Global Finance"
            },
            {
                image: image_3,
                title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2021",
                name: "The Ranker & PWM"
            }
        ];
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <div><svg data-v-79b32762="" width="20" height="20" viewBox="0 0 20 20" fill="blue" xmlns="http://www.w3.org/2000/svg"><path data-v-79b32762="" d="M12.2513 3.58331L18.0846 9.41665C18.418 9.74998 18.418 10.25 18.0846 10.5833L12.2513 16.4166C11.918 16.75 11.418 16.75 11.0846 16.4166C10.7513 16.0833 10.7513 15.5833 11.0846 15.25L15.5013 10.8333H2.5013C2.0013 10.8333 1.66797 10.5 1.66797 9.99998C1.66797 9.49998 2.0013 9.16665 2.5013 9.16665H15.5013L11.0846 4.74998C10.918 4.58331 10.8346 4.41665 10.8346 4.16665C10.8346 3.91665 10.918 3.74998 11.0846 3.58331C11.418 3.24998 11.918 3.24998 12.2513 3.58331Z"></path></svg></div>,
        prevArrow: <div><svg data-v-79b32762="" width="20" height="20" viewBox="0 0 20 20" fill="blue" xmlns="http://www.w3.org/2000/svg"><path data-v-79b32762="" d="M7.7513 3.58331L1.91797 9.41665C1.58464 9.74998 1.58464 10.25 1.91797 10.5833L7.7513 16.4166C8.08464 16.75 8.58464 16.75 8.91797 16.4166C9.2513 16.0833 9.2513 15.5833 8.91797 15.25L4.5013 10.8333H17.5013C18.0013 10.8333 18.3346 10.5 18.3346 9.99998C18.3346 9.49998 18.0013 9.16665 17.5013 9.16665H4.5013L8.91797 4.74998C9.08464 4.58331 9.16797 4.41665 9.16797 4.16665C9.16797 3.91665 9.08464 3.74998 8.91797 3.58331C8.58464 3.24998 8.08464 3.24998 7.7513 3.58331Z"></path></svg></div>
    };
    return (
        <>
            <section className="w-9/12 m-auto mb-28 max-[640px]:w-full max-[640px]:h-[350px]">
                <div className="flex items-center justify-between mb-9">
                    <h2 className="text-2xl text-gray-950 font-bold">ჯილდოები</h2>
                </div>
                <div className="w-full">
                    <div className="h-full m-auto">
                        <Slider {...settings}>
                            {
                                awards.map((award, index) => {
                                    return (
                                        <div className="p-3" key={index}>
                                            <div className="w-full bg-white relative h-[240px] rounded-lg overflow-hidden border-solid border-gray-300 border-[0.5px] hover:shadow-md max-[640px]:h-full">
                                                <div className="w-full m-auto mt-6 h-10">
                                                    <img src={award.image} className="object-contain w-full h-full" />
                                                </div>
                                                <div className="p-7 overflow-hidden">
                                                    <h3 className="font-bold text-lg mb-5 max-[640px]:text-xs">{award.title}</h3>
                                                    <p className="text-gray-400 text-xs max-[640px]:text-xs">{award.name}</p>
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
export default Awards