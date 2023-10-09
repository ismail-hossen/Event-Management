import notFoundImg from "../../assets/notFound.jpg";

const NotFound = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg text-center">
        <h1 className="text-4xl text-gray-800 font-semibold mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          You can{" "}
          <a href="/" className="text-blue-500 hover:underline">
            go back to the home page
          </a>{" "}
          or try searching for the content you are looking for.
        </p>
        <img
          src={notFoundImg}
          alt="404 Image"
          className="mx-auto w-1/2 h-[20rem]"
        />
      </div>
    </div>
  );
};

export default NotFound;
