import Link from "next/link";

export default function Card({ title, description, route, buttonText }) {
  return (
    <div className=" h-5/6 flex-col justify-center m-4 xl:m-8 text-sm  m:text-lg lg:text-2xl xl:text-4xl font-mono bg-dark-green p-2 xl:p-5 rounded-3xl shadow-2xl border-darker-blue border-4">
      <div className="">
        <div className="flex justify-center py-2">
          <h1>{title}</h1>
        </div>
        <div className="flex justify-center py-2">
          <p>{description}</p>
        </div>
        <div className="flex justify-center">
          <button className=" w-3/4 bg-dark-blue text-gray-50 px-10  font-mono m-8 py-4 rounded-2xl hover:bg-light-green shadow-2xl shadow-dark-blue transition duration-500 hover:-translate-y-1 hover:scale-110">
            <Link href={route}>{buttonText}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}