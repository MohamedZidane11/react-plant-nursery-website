import { useState } from 'react';
import NurseryCard from '../components/NurseryCard';
import SearchBar from '../components/SearchBar';
import { nurseries } from '../data/nurseries';

const Nurseries = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // 🔍 Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showOffersOnly, setShowOffersOnly] = useState(false);

  // 🌆 Extract unique cities and districts
  const cityToDistricts = nurseries.reduce((acc, nursery) => {
    const parts = nursery.location.split('-').map(part => part.trim());
    const city = parts[0];
    const district = parts.length > 1 ? parts[1] : 'غير محدد';

    if (!acc[city]) acc[city] = new Set();
    acc[city].add(district);

    return acc;
  }, {});

  // Convert Sets to sorted arrays
  Object.keys(cityToDistricts).forEach(city => {
    cityToDistricts[city] = [...cityToDistricts[city]].sort();
  });

  const allCities = [...Object.keys(cityToDistricts)].sort();

  // 🔎 Filter nurseries
  const filteredNurseries = nurseries.filter((nursery) => {
    const parts = nursery.location.split('-').map(part => part.trim());
    const city = parts[0];
    const district = parts.length > 1 ? parts[1] : 'غير محدد';

    // Search: name, location, categories
    const matchesSearch = searchTerm
      ? nursery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nursery.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nursery.categories.some(cat =>
          cat.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : true;

    // ✅ Fixed: Category filtering
    const matchesCategory = selectedCategory === 'all' ? true : nursery.categories.some((cat) => {
      if (selectedCategory === 'nursery') {
        return ['مشاتل', 'مشاتل مختلطة'].includes(cat);
      }
      if (selectedCategory === 'tools') {
        return ['معدات', 'أدوات الزراعة'].includes(cat);
      }
      if (selectedCategory === 'plants') {
        return ['زهور', 'نخيل', 'نباتات داخلية', 'نباتات خارجية'].includes(cat);
      }
      return false;
    });

    // City
    const matchesCity = selectedRegion === 'all' || city === selectedRegion;

    // District (only if city is selected)
    const matchesDistrict =
      selectedDistrict === 'all' ||
      selectedRegion === 'all' ||
      district === selectedDistrict;

    // Offers only
    const matchesOffer = showOffersOnly ? nursery.discount !== null : true;

    return matchesSearch && matchesCategory && matchesCity && matchesDistrict && matchesOffer;
  });

  // 📊 Sort nurseries
  const sortedNurseries = [...filteredNurseries].sort((a, b) => {
    if (sortBy === 'newest') return b.id - a.id;
    if (sortBy === 'popular') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    if (sortBy === 'rating') return (b.rating || 5) - (a.rating || 5); // fallback rating
    return 0;
  });

  // 🧮 Pagination
  const totalPages = Math.ceil(sortedNurseries.length / itemsPerPage);
  const currentNurseries = sortedNurseries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search and Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              selectedDistrict={selectedDistrict}
              setSelectedDistrict={setSelectedDistrict}
              cityToDistricts={cityToDistricts}
              allCities={allCities}
              sortBy={sortBy}
              setSortBy={setSortBy}
              showOffersOnly={showOffersOnly}
              setShowOffersOnly={setShowOffersOnly}
            />

            {/* Sort & Offers Only */}
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="newest">الترتيب حسب:</option>
                <option value="newest">الأحدث إضافة</option>
                <option value="popular">الأكثر شهرة</option>
                <option value="rating">التقييم</option>
              </select>

              <div className="flex items-center">
                <label className="mr-2 text-sm">إظهار المشاتل ذات العروض الحالية فقط</label>
                <input
                  type="checkbox"
                  checked={showOffersOnly}
                  onChange={(e) => setShowOffersOnly(e.target.checked)}
                  className="h-4 w-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nurseries Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              عُثر على {sortedNurseries.length} مشتل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentNurseries.length > 0 ? (
              currentNurseries.map((nursery) => (
                <NurseryCard key={nursery.id} nursery={nursery} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 py-8">
                لا توجد مشاتل مطابقة للبحث.
              </p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50"
              >
                السابق
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Nurseries;