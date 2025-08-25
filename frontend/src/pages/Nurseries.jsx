import { useState } from 'react';
import NurseryCard from '../components/NurseryCard';
import SearchBar from '../components/SearchBar';
import { nurseries } from '../data/nurseries';


const Nurseries = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [sortBy, setSortBy] = useState('newest');

  const totalPages = Math.ceil(nurseries.length / itemsPerPage);
  
  const currentNurseries = nurseries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
     
      
    {/* Search and Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-grow">
                <SearchBar />
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <select 
                  value={sortBy}
                  onChange={handleSortChange}
                  className="px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="newest">الترتيب حسب:</option>
                  <option value="newest">الأحدث إضافة</option>
                  <option value="popular">الأكثر شهرة</option>
                  <option value="rating">التقييم</option>
                </select>
                
                <div className="flex items-center">
                  <label className="mr-2 text-sm">إظهار المشاتل ذات العروض الحالية فقط</label>
                  <input type="checkbox" className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nurseries Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">عُثر على {nurseries.length} مشتل</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentNurseries.map((nursery) => (
              <NurseryCard key={nursery.id} nursery={nursery} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50"
            >
              السابق
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === i + 1 
                    ? 'bg-green-500 text-white' 
                    : 'border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50"
            >
              التالي
            </button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Nurseries;