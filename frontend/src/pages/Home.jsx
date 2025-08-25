import { useState } from 'react';
import { offers } from '../data/offers';

const Home = () => {
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
      <section className="bg-gradient-to-r from-green-100 to-green-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            أكبر منصة للمشاتل في المملكة 🌿
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            اكتشف أكثر من 500 مشتل ومتجر لأدوات الزراعة في مكان واحد
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-800">ضمان الجودة</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-800">أسعار منافسة</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-800">توصيل سريع</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن مشتل، عرض، منطقة..."
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors">
                توصيل منزلي
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full transition-colors">
                عروض حالية
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full transition-colors">
                مشاتل مختلطة
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full transition-colors">
                أدوات زراعة
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full transition-colors">
                مشاتل
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">التصنيفات الرئيسية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">المشاتل المختلفة</h3>
              <p className="text-sm opacity-90">أكثر من 200 مشتل</p>
            </div>
            
            <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.638 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">أدوات الزراعة</h3>
              <p className="text-sm opacity-90">أكثر من 80 متجر</p>
            </div>
            
            <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">مشاتل</h3>
              <p className="text-sm opacity-90">أكثر من 150 مشتل</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Nurseries */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">أبرز المشاتل</h2>
          
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6">
              <div className="bg-green-100 p-6 rounded-xl shadow-lg min-w-[200px]">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-200 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-green-800 text-center">مشتل البستان</h3>
                <p className="text-sm text-gray-600 text-center">المدينة - حي العزيزية</p>
                <div className="flex justify-center mt-2 space-x-2">
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">استشارات</span>
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">ضمان</span>
                </div>
              </div>
              
              <div className="bg-green-100 p-6 rounded-xl shadow-lg min-w-[200px]">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-200 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.12a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.12a1 1 0 00-1.175 0l-3.976 2.12c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.12c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-green-800 text-center">مشتل الزهور</h3>
                <p className="text-sm text-gray-600 text-center">الدمام - حي الفيصليّة</p>
                <div className="flex justify-center mt-2 space-x-2">
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">تركيب</span>
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">توصيل</span>
                </div>
              </div>
              
              <div className="bg-green-100 p-6 rounded-xl shadow-lg min-w-[200px]">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-200 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V7.414A2 2 0 0018 5.414V4a2 2 0 00-2-2H8a2 2 0 00-2 2v1.414A2 2 0 008 8.414V16a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-green-800 text-center">مشتل النخيل</h3>
                <p className="text-sm text-gray-600 text-center">جدة - حي الصفا</p>
                <div className="flex justify-center mt-2 space-x-2">
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">استشارات</span>
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">توصيل</span>
                </div>
              </div>
              
              <div className="bg-green-100 p-6 rounded-xl shadow-lg min-w-[200px]">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-200 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-green-800 text-center">مشتل الربيع</h3>
                <p className="text-sm text-gray-600 text-center">الرياض - حي النخيل</p>
                <div className="flex justify-center mt-2 space-x-2">
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">ضمان</span>
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">تركيب</span>
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">توصيل</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Nurseries */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">الرعاة الرسميون ✨</h2>
            <p className="text-gray-300">تفتخر بشراكتنا مع أفضل المشاتل ومقدمي الخدمات في المملكة</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 border border-yellow-500 p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">حدائق المملكة</h3>
              <p className="text-sm text-gray-300">نباتات داخلية وخارجية مميزة</p>
              <div className="mt-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
                فضي
              </div>
            </div>
            
            <div className="bg-gray-800 border border-yellow-500 p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">مشاتل الرياض الخضراء</h3>
              <p className="text-sm text-gray-300">تنسيق حدائق احترافي</p>
              <div className="mt-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
                ذهبي
              </div>
            </div>
            
            <div className="bg-gray-800 border border-yellow-500 p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">مؤسسة النخيل الذهبية</h3>
              <p className="text-sm text-gray-300">متخصصون في أشجار النخيل النادرة</p>
              <div className="mt-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
                ذهبي
              </div>
            </div>
            
            <div className="bg-gray-800 border border-yellow-500 p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">مشتل الخليج الأخضر</h3>
              <p className="text-sm text-gray-300">الرائد في النباتات المحلية والمستوردة</p>
              <div className="mt-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
                بلاتيني
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">العروض الحالية</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-grow">
                <div className="bg-orange-500 p-4 rounded-lg mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">عرض خاص</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-green-800 mb-4">خصم 30% على جميع النباتات الداخلية</h3>
                <p className="text-gray-600 mb-6">احصل على خصم مميز على تشكيلة واسعة من النباتات الداخلية الجميلة. تشمل نباتات الزينة والصبار والنباتات العطرية</p>
                
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors">
                  تفاصيل العرض
                </button>
              </div>
              
              <div className="bg-orange-100 p-6 rounded-lg">
                <div className="w-24 h-24 mx-auto mb-4 bg-orange-200 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;