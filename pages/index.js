import { Banner } from '../components';

const Home = () => (
  <div className="flex justify-center p-12 sm:px-4">
    <div className="w-full  minmd:w-4/5  ">
      <Banner
        name="Discover,collect and sell extraordinary NFTs"
        childStyles="md:text-4xl sm:text-2-xl xs:text-xl text-left"
        parentStyles="mb-6 justify-start h-72 sm:h-60 p-12 xs:p-4 xs:h-44  rounded-3xl"
      />
    </div>
  </div>
);

export default Home;
