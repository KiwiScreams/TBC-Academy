import background_image from "../../../assets/images/first-image.webp"
function ConceptPanel() {
    return (
        <>
            <section className="w-full h-96 overflow-hidden rounded-lg p-24 mb-16" style={{
                backgroundImage: `url(${background_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backdropFilter: 'brightness(50%)'
            }}>
                <div className="flex flex-col gap-6">
                    <h1 className="text-2xl font-bold text-white">თიბისი კონცეპტი</h1>
                    <p className="text-base text-white w-1/2">პერსონალური საბანკო მომსახურება, მორგებული თქვენს საჭიროებებსა და ინტერესებზე</p>
                    <button className="flex items-center gap-2 bg-gradient-to-r font-bold from-blue-800 to-blue-500 text-white text-xs w-36 h-12 justify-center rounded-md hover:bg-blue-800"><svg data-v-67f54ace="" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-67f54ace="" d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path></svg>გამოიწერეთ</button>
                </div>
            </section>
        </>
    )
}
export default ConceptPanel