import background_image_1 from "../../../assets/images/image-2.png"
import background_image_2 from "../../../assets/images/image-4.png"
import background_image_3 from "../../../assets/images/image-3.png"
function Select() {
    return (
        <>
            <section className="w-9/12 m-auto mb-28">
                <h2 className="mb-9 text-2xl text-gray-950 font-bold">შეარჩიეთ ნაკრები</h2>
                <div className="h-[532px] gap-8 grid-rows-1 grid grid-cols-2 grid-rows-auto">

                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col h-64 p-10 relative rounded-xl"
                            style={{
                                backgroundImage: `url(${background_image_1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backdropFilter: 'brightness(50%)'
                            }}>
                            <div className="absolute bottom-10 left-10 gap-8 flex flex-col">
                                <h3 className="text-white text-2xl font-bold">ციფრული</h3>
                                <a className="bg-none text-white text-sm flex items-center gap-2 font-bold underline"><svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path></svg> იხილეთ მეტი</a>
                            </div>
                        </div>

                        <div className="flex flex-col h-64 p-10 relative rounded-xl"
                            style={{
                                backgroundImage: `url(${background_image_2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backdropFilter: 'brightness(50%)'
                            }}>
                            <div className="absolute bottom-10 left-10 gap-5 flex flex-col">
                                <h3 className="text-white text-2xl font-bold">პრემიუმი</h3>
                                <a className="bg-none text-white text-sm flex items-center gap-2 font-bold underline"><svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path></svg> იხილეთ მეტი</a>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full p-10 rounded-xl"
                        style={{
                            backgroundImage: `url(${background_image_3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backdropFilter: 'brightness(50%)'
                        }}>
                        <div className="absolute bottom-10 left-10 gap-5 flex flex-col">
                            <h3 className="text-white text-2xl font-bold">360</h3>
                            <a className="bg-none text-white text-sm flex items-center gap-2 font-bold underline"><svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path></svg> იხილეთ მეტი</a>
                        </div>
                    </div>
                </div>
            </section ></>
    )
}
export default Select