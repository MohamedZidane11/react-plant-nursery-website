const OfferCard = ({ offer }) => {
  return (
    <div className="bg-orange-50 rounded-xl shadow-lg overflow-hidden mb-6">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-green-800">{offer.title}</h3>
            <p className="text-gray-700 mt-2">{offer.description}</p>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
              {offer.discount}%</div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {offer.tags.map((tag, index) => (
            <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>ينتهي: {offer.endDate}</span>
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </div>
      </div>
      
      {offer.highlighted && (
        <div className="bg-orange-500 p-4 text-center">
          <span className="text-white font-bold">عرض خاص</span>
        </div>
      )}
    </div>
  );
};

export default OfferCard;