import { React } from 'react'
import PropertyCard from "./PropertyCard";
import { useNavigate } from 'react-router-dom';

function HomePageProperties({ properties, loading, error }) {
    const navigate = useNavigate();

    const handleViewMore = () => {
        window.scrollTo(0, 0);
        navigate("/properties");
    };

    return (
        <div className="bg-gray-100 py-16 px-6 rounded-3xl my-2">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
                    Featured <span className="text-green-500">Properties</span>
                </h1>
                <p className="text-gray-600 text-center mb-12">
                    Explore our handpicked selection of the best real estate deals.
                </p>

                {loading ? (
                    <div className="flex w-full justify-center">
                        <span className="text-gray-500">Loading...</span>
                    </div>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {properties.length > 0 ? (
                            properties.map((property) => (
                                <PropertyCard key={property._id} property={property} />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500">
                                No properties found.
                            </p>
                        )}
                    </div>
                )}
            </div>
            <div className='w-full flex justify-center mt-14'>
                <button
                    className="bg-green-500 border-2 border-green-800 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
                    onClick={handleViewMore}
                >
                    View More Properties
                </button>
            </div>
        </div>
    );
}

export default HomePageProperties;
