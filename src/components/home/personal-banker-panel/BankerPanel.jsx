import background_image from "../../../assets/images/image-9.png"
function BankerPanel() {
    return (
        <>
            <section className="w-9/12 m-auto h-[360px] overflow-hidden rounded-lg p-24 mb-16" style={{
                backgroundImage: `url(${background_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backdropFilter: 'brightness(50%)'
            }}>
                <div className="flex flex-col gap-6">
                    <h1 className="text-2xl font-bold text-white">პირადი ბანკირი</h1>
                    <p className="text-base text-white w-full">თქვენი სანდო პარტნიორი ფინანსურ რჩევებსა და ოპერაციებში</p>
                    <button className="flex items-center gap-2 bg-gradient-to-r font-bold from-blue-800 to-blue-500 text-white text-xs w-36 h-12 justify-center rounded-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400">გაიგეთ მეტი</button>
                </div>
            </section>
        </>
    )
}
export default BankerPanel