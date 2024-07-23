import { NavLink } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import image_1 from "../../../assets/images/image-5.png"
import image_2 from "../../../assets/images/image-6.jpg"
import image_3 from "../../../assets/images/image-7.png"
import image_4 from "../../../assets/images/image-16.png"
import image_5 from "../../../assets/images/image-17.png"
import image_6 from "../../../assets/images/image-18.png"
import comp_1 from "../../../assets/images/image-15.jpg"
import comp_2 from "../../../assets/images/image-13.png"
import comp_3 from "../../../assets/images/image-19.png"
import comp_4 from "../../../assets/images/image-14.png"


function Offers() {
    const items =
        [
            {
                image: image_1,
                company: comp_1,
                title: "ინვესტიციები",
                name: "MP დეველოპმენტი - აშშ და ევროს ობლიგაციები"
            },
            {
                image: image_2,
                company: comp_1,
                title: "ჯაზ ფესტივალის შეთავაზებები",
                name: "IVERIA BEACH - დაიბრუნეთ 30%"
            },
            {
                image: image_3,
                company: comp_2,
                title: "ავტო თეგეტა მოტორსი",
                name: "თეგეტა მოტორსი - 50% ფასდაკლება"
            },
            {
                image: image_4,
                company: comp_2,
                title: "ავტო ჯაზ ფესტივალის შეთავაზებები თეგეტა მოტორსი",
                name: "თეგეტა მოტორსი - ბათუმი"
            },
            {
                image: image_5,
                company: comp_3,
                title: "დასვენება ვიზა ჯაზ ფესტივალის შეთავაზებები",
                name: "Le Meridien Batumi - 15%-იანი ფასდაკლება"
            },
            {
                image: image_6,
                company: comp_4,
                title: "დასვენება ვიზა ჯაზ ფესტივალის შეთავაზებები",
                name: "Colosseum Marina Hotel - 15%-იანი ფასდაკლება"
            },
        ];
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <div><svg data-v-79b32762="" width="20" height="20" viewBox="0 0 20 20" fill="blue" xmlns="http://www.w3.org/2000/svg"><path data-v-79b32762="" d="M12.2513 3.58331L18.0846 9.41665C18.418 9.74998 18.418 10.25 18.0846 10.5833L12.2513 16.4166C11.918 16.75 11.418 16.75 11.0846 16.4166C10.7513 16.0833 10.7513 15.5833 11.0846 15.25L15.5013 10.8333H2.5013C2.0013 10.8333 1.66797 10.5 1.66797 9.99998C1.66797 9.49998 2.0013 9.16665 2.5013 9.16665H15.5013L11.0846 4.74998C10.918 4.58331 10.8346 4.41665 10.8346 4.16665C10.8346 3.91665 10.918 3.74998 11.0846 3.58331C11.418 3.24998 11.918 3.24998 12.2513 3.58331Z"></path></svg></div>,
        prevArrow: <div><svg data-v-79b32762="" width="20" height="20" viewBox="0 0 20 20" fill="blue" xmlns="http://www.w3.org/2000/svg"><path data-v-79b32762="" d="M7.7513 3.58331L1.91797 9.41665C1.58464 9.74998 1.58464 10.25 1.91797 10.5833L7.7513 16.4166C8.08464 16.75 8.58464 16.75 8.91797 16.4166C9.2513 16.0833 9.2513 15.5833 8.91797 15.25L4.5013 10.8333H17.5013C18.0013 10.8333 18.3346 10.5 18.3346 9.99998C18.3346 9.49998 18.0013 9.16665 17.5013 9.16665H4.5013L8.91797 4.74998C9.08464 4.58331 9.16797 4.41665 9.16797 4.16665C9.16797 3.91665 9.08464 3.74998 8.91797 3.58331C8.58464 3.24998 8.08464 3.24998 7.7513 3.58331Z"></path></svg></div>,
    };
    return (
        <>
            <section className="w-full mb-28">
                <div className="flex items-center justify-between mb-9">
                    <h2 className="text-2xl text-gray-950 font-bold">შეთავაზებები</h2>
                    <span className="text-blue-900 font-bold"><NavLink to="/" className="flex justify-center items-center gap-2 hover:opacity-70">
                        <svg data-v-562b0aec="" width="16" height="16" viewBox="0 0 16 16" fill="blue" xmlns="http://www.w3.org/2000/svg"><path data-v-562b0aec="" d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path></svg>
                        ყველა შეთავაზება
                    </NavLink>
                    </span>
                </div>
                <div className="w-full">
                    <div className="h-full m-auto">
                        <Slider {...settings}>
                            {
                                items.map((item, index) => {
                                    return (
                                        <div key={index} className="w-[300px] bg-white relative h-[400px] rounded-lg overflow-hidden border-solid border-[#f8f8f8]" >
                                            <div className="absolute w-20 h-14 bg-white rounded-l-lg flex justify-center items-center z-3 top-0 right-5">
                                                <img src={item.company} alt="company" className="w-full" />
                                            </div>
                                            <div className="w-full">
                                                <img src={item.image} className="object-contain w-full" />
                                            </div>
                                            <div className="p-7">
                                                <p className="text-gray-400 text-xs">{item.title}</p>
                                                <h3 className="font-bold text-lg">{item.name}</h3>
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
export default Offers