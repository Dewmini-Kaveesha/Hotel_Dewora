import React from 'react';

// Import room images
import twoPerson1Img from '../assets/2 person.jpg';
import twoPersonImg from '../assets/2-person.jpg';
import fourPersonImg from '../assets/4-person.jpg';
import familyImg from '../assets/family.jpg';

const Rooms = () => {
  const handleBookNow = () => {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center'
      });
    }
  };

  const roomsData = [
    {
      id: 1,
      title: "2 Person Room",
      image: twoPerson1Img,
      description: "Perfect for couples seeking a romantic getaway. Our elegantly designed 2-person rooms feature a comfortable king-size bed, modern amenities, and a private balcony with stunning views. Enjoy complimentary Wi-Fi, air conditioning, and a luxurious en-suite bathroom.",
      features: ["King-size bed", "Private balcony", "Modern bathroom", "Free Wi-Fi", "Air conditioning"],
      price: "$120/night"
    },
    {
      id: 2,
      title: "Deluxe 2-Person Suite",
      image: twoPersonImg,
      description: "Upgrade your experience with our premium 2-person suite. Featuring a separate living area, premium furnishings, and enhanced amenities. The perfect choice for special occasions and extended stays with added comfort and space.",
      features: ["Separate living area", "Premium furnishings", "Mini-bar", "Room service", "City view"],
      price: "$180/night"
    },
    {
      id: 3,
      title: "4 Person Room",
      image: fourPersonImg,
      description: "Ideal for small groups or families with children. Our spacious 4-person rooms feature two comfortable double beds, ample storage space, and modern conveniences. Perfect for creating lasting memories with friends or family.",
      features: ["Two double beds", "Spacious layout", "Family-friendly", "Storage space", "Entertainment center"],
      price: "$200/night"
    },
    {
      id: 4,
      title: "Family Suite",
      image: familyImg,
      description: "Our largest accommodation perfect for families. This suite offers multiple sleeping areas, a kitchenette, and plenty of space for everyone to relax. Create unforgettable family moments in comfort and style with all the amenities you need.",
      features: ["Multiple sleeping areas", "Kitchenette", "Living area", "Family amenities", "Extra space"],
      price: "$280/night"
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold tracking-tight text-transparent md:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text">
            Our Rooms
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>
          <p className="max-w-3xl mx-auto text-xl font-light leading-relaxed text-gray-700">
            Choose from our carefully designed rooms, each offering comfort, style, and modern amenities
          </p>
        </div>

        {/* Rooms Grid - Alternating Layout */}
        <div className="space-y-20">
          {roomsData.map((room, index) => (
            <div
              key={room.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden transition-all duration-700 shadow-2xl group rounded-2xl hover:shadow-blue-500/20">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="object-cover w-full transition-transform duration-700 h-96 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:opacity-100"></div>
                  <div className="absolute text-white transition-opacity duration-500 opacity-0 bottom-6 left-6 group-hover:opacity-100">
                    <p className="text-2xl font-bold">{room.price}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full space-y-6 lg:w-1/2">
                <div>
                  <h3 className="mb-4 text-4xl font-bold text-gray-900">{room.title}</h3>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600">
                    {room.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="mb-3 text-xl font-semibold text-gray-800">Room Features:</h4>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {room.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing and CTA */}
                <div className="flex flex-col items-start justify-between pt-6 border-t border-gray-200 sm:flex-row sm:items-center">
                  <div>
                    <p className="mb-2 text-3xl font-bold text-blue-600">{room.price}</p>
                    <p className="text-sm text-gray-500">Per night, taxes included</p>
                  </div>
                  <button 
                    onClick={handleBookNow}
                    className="px-8 py-3 mt-4 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg sm:mt-0 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 hover:shadow-xl hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;