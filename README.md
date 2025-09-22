🏨 DEWORA Hotel Website

A modern, luxurious hotel website built with React.js, Tailwind CSS, and Vite, showcasing premium accommodations, world-class facilities, and a seamless booking experience for Hotel DEWORA.

🌟 About DEWORA

DEWORA Hotel offers the pinnacle of hospitality, blending elegant accommodations with exceptional service. This website serves as a digital gateway for guests to explore rooms, view amenities, and make instant bookings via WhatsApp.

✨ Features
🏠 Homepage

Full-screen hero section with background image and branding

Call-to-action buttons and smooth navigation

Responsive design for all devices

ℹ️ About Us

Story of DEWORA and core brand values

Focused on trust, hospitality, and experience

🛏️ Rooms & Suites

Display of room categories with photos and pricing

Interactive UI for room exploration

🏊 Facilities & Services

List of world-class services:

Spa & Wellness Center

Swimming Pool

Fitness Center

Fine Dining Restaurant

Free Wi-Fi, Parking, and 24/7 Concierge

📸 Gallery

Elegant image gallery or slider to showcase hotel visuals

📞 Contact & Booking

Contact details and embedded map

WhatsApp Booking System:

Form with Name, Dates, Room Type

Generates a pre-filled WhatsApp message

Seamless guest-to-hotel booking conversation

🛠️ Tech Stack
Layer	Tech
Frontend	React 19.1.1
Build	Vite 7.1.6
Styling	Tailwind CSS
Quality	ESLint
Features	WhatsApp Booking, HMR
📁 Project Structure
Hotel_dewora/
├── public/                    # Static public assets
├── src/
│   ├── components/           # React components
│   ├── assets/               # Images, icons, etc.
│   ├── styles/               # Global & component styles
│   ├── utils/                # Utility functions
│   ├── App.jsx               # Main App component
│   ├── main.jsx              # Entry point
│   ├── index.css             # Tailwind directives
│   └── App.css               # App-specific styles
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
├── index.html
└── README.md

🚀 Getting Started
Prerequisites

Node.js (v16+)

npm or yarn

Modern browser

Installation
# Clone the repo
git clone https://github.com/Dewmini-Kaveesha/Hotel_Dewora.git
cd Hotel_Dewora

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:5173

🌍 Environment Variables

Create a .env file in the root directory:

VITE_HOTEL_PHONE=+94123456789
VITE_HOTEL_EMAIL=reservations@dewora.com
VITE_HOTEL_ADDRESS=Colombo, Sri Lanka
VITE_WHATSAPP_NUMBER=94123456789

💬 WhatsApp Integration

utils/whatsapp.js:

const generateWhatsAppURL = (name, checkin, checkout, roomType, phoneNumber) => {
  const message = `Hello DEWORA Hotel! I would like to make a reservation:

Name: ${name}
Check-in: ${checkin}
Check-out: ${checkout}
Room Type: ${roomType}

Please confirm availability.`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

📱 Responsive Design

✅ Desktop: Full UI

✅ Tablet: Adaptive layout

✅ Mobile: Touch-optimized, smooth UX

📜 Scripts
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Lint JS/JSX files

👨‍💻 Developer

Dewmini Kaveesha

🌐 Full Stack Web Developer

🛠️ React | Tailwind | Vite | Node

🔗 GitHub

💼 LinkedIn

📧 dewminikaveeshaa@gmail.com

🤝 Contributing

Contributions are welcome!

Fork the repo

Create your feature branch (git checkout -b feature/my-feature)

Commit your changes

Push and open a Pull Request

🏁 Final Notes

Built with ❤️ for DEWORA Hotel
Powered by React, Tailwind, and Vite
© 2025 DEWORA Hotel. All rights reserved.