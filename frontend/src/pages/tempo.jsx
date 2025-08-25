export default function Test() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
        <header className="bg-green-800 text-white p-6 text-center">
          <h1 className="text-4xl font-bold">🌿 منصة المشاتل</h1>
          <p className="text-green-200 mt-2">Tailwind يجب أن يعمل الآن!</p>
        </header>
  
        <main className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-4">✅ نجاح!</h2>
              <p className="text-gray-700">
                إذا رأيت خلفية خضراء وزرقاء، فإن Tailwind يعمل.
              </p>
              <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition">
                زر تجريبي
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }