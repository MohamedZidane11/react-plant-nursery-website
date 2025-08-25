import { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
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
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors"
        >
          بحث
        </button>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="all">التصنيف الرئيسي</option>
          <option value="nursery">مشاتل</option>
          <option value="tools">أدوات زراعة</option>
          <option value="plants">نباتات</option>
        </select>
        
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="all">المنطقة</option>
          <option value="riyadh">الرياض</option>
          <option value="jeddah">جدة</option>
          <option value="mecca">مكة المكرمة</option>
        </select>
        
        <select
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="all">جميع المناطق</option>
          <option value="riyadh">الرياض</option>
          <option value="jeddah">جدة</option>
          <option value="mecca">مكة المكرمة</option>
        </select>
        
        <select
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="all">اختر المنطقة أوّلاً</option>
          <option value="riyadh">الرياض</option>
          <option value="jeddah">جدة</option>
          <option value="mecca">مكة المكرمة</option>
        </select>
        
        <select
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="all">اختر المدينة أوّلاً</option>
          <option value="riyadh">الرياض</option>
          <option value="jeddah">جدة</option>
          <option value="mecca">مكة المكرمة</option>
        </select>
      </div>
    </form>
  );
};

export default SearchBar;