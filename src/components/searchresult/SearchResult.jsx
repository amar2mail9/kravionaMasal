import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom';
import { ProductCard } from '../Productcard';

const SearchResult = () => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
  const {keyword} = useParams();

  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URI}/search?keyword=${keyword}`);
      const data = await response.json();
      if (data.success) {
        setProducts(data.products);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchSearchResults();
  }, [keyword]);

  if (loading) {
    return <Layout><p className='text-center'>Loading...</p></Layout>;
  }
  return (
    <Layout>
        <div className='flex flex-col min-h-[80vh] px-[] md:px-16 lg:px-32 py-8 bg-gray-50'>
            <div>
                <h2>
                    Search Result for :"{keyword}"
                </h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
                {
                    products.length > 0 ? (
                        products.map((product, idx) => (
                            <ProductCard key={idx} {...product} />
                        ))
                    ) : (
                        <p className='text-center'>No products found.</p>
                    )
                }
            </div>  
        </div>
    </Layout>
  )
}

export default SearchResult