import { useSelector } from "react-redux"

const Home = () => {
  const product = useSelector((state) => state.productReducer.products);
  console.log(product);
  
  
  return (
   <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Product List
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {product.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">
                {product.name}
              </h2>

              <p className="text-gray-500 text-sm mb-2">
                {product.category}
              </p>

              <p className="text-gray-700 text-sm line-clamp-2">
                {product.description}
              </p>

              <div className="flex justify-between items-center mt-3">
                <span className="text-blue-600 font-bold">
                  ₹{product.price}
                </span>

                <span className="text-yellow-500 text-sm">
                  ⭐ {product.rating}
                </span>
              </div>

              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        
))}
      </div>
    </div>
  );
};


export default Home