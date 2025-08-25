
const SearchBar = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
  selectedDistrict,
  setSelectedDistrict,
  cityToDistricts,
  allCities,
  sortBy,
  setSortBy,
  showOffersOnly,
  setShowOffersOnly,
}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    // Optional: analytics, scroll, etc.
  };

  // Get districts for selected city
  const districts = selectedRegion !== 'all' && cityToDistricts[selectedRegion]
    ? cityToDistricts[selectedRegion]
    : [];

  return (
    <form onSubmit={handleSearch} className="mb-8">
      {/* Search Input */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <input
            type="text"
            placeholder="ابحث باسم المشتل، العرض، التصنيف، الموقع..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors whitespace-nowrap"
        >
          بحث
        </button>
      </div>

      {/* Filters Row */}
      <div className="mt-4 flex flex-wrap gap-2">
        {/* Category */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md min-w-36"
        >
          <option value="all">التصنيف الرئيسي</option>
          <option value="nursery">مشاتل</option>
          <option value="tools">أدوات زراعة</option>
          <option value="plants">نباتات</option>
        </select>

        {/* City */}
        <select
          value={selectedRegion}
          onChange={(e) => {
            setSelectedRegion(e.target.value);
            setSelectedDistrict('all'); // Reset district when city changes
          }}
          className="px-3 py-2 border border-gray-300 rounded-md min-w-36"
        >
          <option value="all">جميع المدن</option>
          {allCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        {/* District (Conditional) */}
        {selectedRegion !== 'all' && districts.length > 0 && (
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="px-3 py-2 border border-green-500 bg-green-50 text-gray-800 rounded-md min-w-40"
          >
            <option value="all">جميع الأحياء</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        )}

        {/* Fallback if city selected but no districts */}
        {selectedRegion !== 'all' && districts.length === 0 && (
          <select disabled className="px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-400 min-w-40">
            <option>لا توجد أحياء</option>
          </select>
        )}
      </div>
    </form>
  );
};

export default SearchBar;