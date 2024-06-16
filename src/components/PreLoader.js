const PreLoader = () => {
  return (
    <div
      className="preloader fixed inset-0 flex z-55 items-center
      overflow-hidden justify-center bg-black"
    >
      <div className="landing__top flex flex-col items-center justify-center">
        <span className="sub text-white animatetext-5xl font-bold">
          Loading...
        </span>
      </div>
      <div className="landing__main flex flex-col items-center justify-center mt-4">
        <span
          className=" text-5xl items-center justify-between 
        font-bold text-white overflow-hidden"
        >
          Chris Xiong
        </span>
      </div>
      <div className="shapes flex flex-wrap justify-center mt-4">
        <div className="shape main-circle w-16 h-12 bg-white rounded-full m-2"></div>
        <div className="shape shape-1 w-16 h-12 bg-blue rounded-full m-2"></div>
      </div>
    </div>
  );
};
export default PreLoader;
