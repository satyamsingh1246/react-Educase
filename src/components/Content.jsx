const Content = () => {
  return (
    <div className="absolute top-0 left-2/5 w-[375px] h-[812px] bg-[#F7F8F9] opacity-100">
      <div className="relative w-full h-full flex flex-col gap-4">

        {/* Header */}
        <div className="w-full absolute bg-white h-[10%] p-3">
          <h1 className="text-3xl font-semibold font-[Rubik]">Account Settings</h1>
        </div>

        {/* Profile Section */}
        <div className="w-full relative top-[10%] h-[10%] p-3 flex gap-4 items-center">
          <div className="relative">
            <img src="/camera.svg" alt="camera" className="absolute right-1 bottom-0" />
            <img src="/image2.png" alt="profile" className="w-16 h-16 rounded-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold">Marry Doe</h3>
            <h5 className="text-gray-600">Marry@gmail.com</h5>
          </div>
        </div>

        {/* Description and Dotted HR */}
        <div className="w-full relative top-[12%] px-3">
          <p className="text-sm text-gray-700">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
            Invidunt Ut <br />
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>

          <hr className="border-t-2 border-dotted border-black my-5" />
        </div>

      </div>
    </div>
  );
};

export default Content;
