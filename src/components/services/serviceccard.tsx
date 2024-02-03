export default function ServiceCard({ title, description, img }: { title: string, description: string, img: string }) {
    return (
        <>
            <div className="flex flex-col justify-center items-start gap-5 m-5 bg-white shadow-lg md:p-5 rounded-xl h-80 z-20">
                <img src={img} alt="Monitor" className="w-12 mx-5" />
                <p className=" text-lg md:text-2xl font-bold text-gray-600 w-56 md:w-auto mx-5">{title}</p>
                <p className="text-sm md:text-md text-gray-500 w-56 md:w-auto mx-5">{description}</p>
            </div>
        </>
    )
}