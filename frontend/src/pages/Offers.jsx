import { useState } from 'react';
import OfferCard from '../components/OfferCard';
import { offers } from '../data/offers';

const Offers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(offers.length / itemsPerPage);
  
  const currentOffers = offers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            العروض الخاصة 🎁
          </h1>
          <p className="text-xl mb-8">
            اكتشف أفضل العروض والخصومات من المشاتل المميزة
          </p>
          <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
            12 عرض نشط حالياً 🙌
          </button>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-colors">
                تطبيق الفلتر
              </button>
              
              <select className="px-4 py-2 border border-gray-300 rounded-md">
                <option>الحدث أولاً</option>
                <option>الأكثر شعبية</option>
                <option>أقل السعر</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-md">
                <option>الترتيب:</option>
                <option>الأحدث أولاً</option>
                <option>الأقدم أولاً</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-md">
                <option>جميع العروض</option>
                <option>خصومات</option>
                <option>توصيل مجاني</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-md">
                <option>جميع التصنيفات</option>
                <option>نباتات داخلية</option>
                <option>نباتات خارجية</option>
                <option>أدوات زراعة</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
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
                    ? 'bg-orange-500 text-white' 
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

export default Offers;