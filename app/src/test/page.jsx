import Link from "next/link";
import FeatureCard from "../components/feature-card";

export default function Page() {
  return (
    // Main Container
    <div className="flex flex-col w-full justify-center items-center font-mono">
      {/*Top Container*/}
      <div className="flex flex-col xl:flex-row w-7/8 mx-20 m-2 xl:my-10 items-center justify-center xl:items-stretch ">
        {/*Left Container*/}
        <div className="flex-col w-1/2 xl:w-1/3 flex bg-darker-blue justify-center items-center rounded-t-2xl xl:rounded-l-2xl xl:rounded-tr-none">
          <div className="flex items-center p-4 justify-center">
            <h1 className="text-2xl xl:text-4xl text-white">Digital Herbarium</h1>
          </div>
          <div className="w-2/3 flex items-center ">
            <p className="p-4 text-xl xl:text-2xl w-full text-white">
              This is a platform for botany enthusiasts and horticulturalists to
              store and share their plant identification collections.
            </p>
          </div>
          <div className="flex">
            <button className="bg-dark-green text-gray-50 px-5 xl:px-10 xl:text-2xl text-xl font-mono m-8 py-4 rounded-2xl hover:bg-light-green shadow-2xl shadow-dark-blue transition duration-500 hover:-translate-y-1 hover:scale-110">
              <Link href="../src">Start Here</Link>
            </button>
          </div>
        </div>
        {/*Right Container*/}
        <div className="w-1/2 xl:w-1/3 flex justify-center bg-light-green rounded-b-2xl xl:rounded-r-2xl xl:rounded-bl-none p-4">
          <img
            className="w-full m-12 object-cover rounded-2xl border-4 border-dark-blue shadow-2xl shadow-dark-blue "
            src="https://media.istockphoto.com/id/1466653322/photo/close-up-woman-planting-a-young-fir-tree-in-the-forest-putting-it-down-on-the-ground.jpg?s=612x612&w=0&k=20&c=6B_xWx9GiHJzz24ilUUz-dfhPnY4iujhSYWj9aFzkVg="
          />
        </div>
      </div>
      {/*Bottom Container*/}
      <div className="flex flex-col xl:flex-row items-center mx-20">
        {/*Left Container*/}
        <FeatureCard
          header="Feature 1"
          img="/assets/images/reading-book.png"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi incidunt officiis dolorem accusamus odit perferendis aperiam eaque voluptas, iure suscipit maxime doloremque est laborum recusandae illo fugit debitis amet consequatur."
        />
        {/*Center Container*/}
        <FeatureCard
          header="Feature 2"
          img="/assets/images/icon-plant.png"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi incidunt officiis dolorem accusamus odit perferendis aperiam eaque voluptas, iure suscipit maxime doloremque est laborum recusandae illo fugit debitis amet consequatur."
        />
        {/*Right Container*/}
        <FeatureCard
          header="Feature 3"
          img="/assets/images/save-icon.png"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi incidunt officiis dolorem accusamus odit perferendis aperiam eaque voluptas, iure suscipit maxime doloremque est laborum recusandae illo fugit debitis amet consequatur."
        />
      </div>
    </div>
  );
}
