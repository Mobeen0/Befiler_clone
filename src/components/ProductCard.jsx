const ProductCard = ({ title, description, isActive }) => {
    return (
      <div className={`text-center flex flex-col p-6 rounded-lg h-96 ${isActive ? 'bg-white shadow-lg' : 'bg-pink-100'}`} style={{ backgroundColor: "#fdebee" }}>
        <h3 className="text-xl font-bold my-4">{title}</h3>
        <div className="mb-6 mt-6 flex-grow overflow-y-auto">
          <p>{description}</p>
        </div>
        <div className="mt-auto">
          <button className="w-full bg-red-500 text-white py-3 px-4 rounded-full hover:bg-red-600 transition-colors">
            Click here to start now
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;