import { Link } from "react-router-dom";

const FanGuide = () => {
  return (
    <div>
      <div id="fan-guide" className="text-center flex flex-col justify-center pt-3 sm:pt-4 md:pt-6 h-48 sm:h-56 md:h-60 lg:h-64" style={{
        backgroundImage: 'url("/src/assets/img13.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
      }}>
        <Link to="/" className="text-cyanCustom font-semibold hover:underline text-sm sm:text-base md:text-lg">
          ← Back to Home
        </Link>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-outfit mt-2">Fan Guide</h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 text-base sm:text-lg md:text-xl pt-3 sm:pt-4 md:pt-6 p-4 sm:p-6 md:p-8 lg:p-10 bg-veryLightGray max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold font-outfit">Travel</h1>
        <p className="text-justify sm:text-left leading-relaxed">Planning travel for the FIFA World Cup 2026 is essential, as matches will take place across multiple host cities in the United States, Canada, and Mexico. Internation visitors should ensure their passports are valid and check vis and entry requirements well in advance. Booking flights early can help reduce costs and secure preferred routes. Travel insurance is highly recommended to cover flight delays, cancellations, or medical emergencies during your World Cup trip.</p>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold font-outfit mt-2 sm:mt-3">Accommodation</h1>
        <p className="text-justify sm:text-left leading-relaxed">Accommodation for the 2026 FIFA World Cup will range from luxury hotels and budget hostels to short-term rentals and official fan accommodations. Demand will be high during matchdays, so early booking is strongly advised. Staying near stadiums or close to public transport hubs can significantly improve your matchday experience. Many host cities will also offer official FIFA-approved accommodation options for fans.</p>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold font-outfit mt-2 sm:mt-3">Food and Drink</h1>
        <p className="text-justify sm:text-left leading-relaxed">Fans attending the FIFA World Cup 2026 will have the chance to enjoy diverse food and drink options across North America. Host cities are known for their international cuisine, local specialties, and vibrant street food scenes. Stadiums will provide food and beverages, including vegetarian and international options, though availability may vary. Fans should be aware of local regulations regarding alcohol sales and consumption near stadiums.</p>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold font-outfit mt-2 sm:mt-3">Shopping</h1>
        <p className="text-justify sm:text-left leading-relaxed">Shopping during the World Cup 2026 offers fans the opportunity to purchase official FIFA merchandise such as jerseys, scarves, flags, and souvenirs. Official FIFA World Cup stores and licensed retailers are the best places to buy authentic items. In addition, host cities feature popular shopping districts, malls, and local markets where fans can explore regional products and unique gifts.</p>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold font-outfit mt-2 sm:mt-3">Health and Safety</h1>
        <p className="text-justify sm:text-left leading-relaxed">Health and safety are important considerations for all World Cup 2026 visitors. Fans should stay hydrated, especially in warmer host cities, and carry any necessary medications. Knowing the location of nearby hospitals, clinics, and pharmacies can be helpful during your stay. International travelers are advised to have comprehensive travel health insurance for the duration of the tournament.</p>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold font-outfit mt-2 sm:mt-3">Security</h1>
        <p className="text-justify sm:text-left leading-relaxed">Security measures will be in place across FIFA World Cup 2026 stadiums, fan zones, and public areas. Fans should expect security screenings, bag checks, and restricted items policies at venues. Following official guidelines and instructions from security personnel will help ensure a safe and enjoyable experience. Keep personal belongings secure, particularly in crowded areas.</p>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold font-outfit mt-2 sm:mt-3">Transport</h1>
        <p className="text-justify sm:text-left leading-relaxed">Transport during the FIFA World Cup 2026 will be supported by enhanced public transit, shuttle services, ride-sharing, and taxis in host cities. Public transportation is often the fastest and most reliable option on matchdays due to road closures and high traffic. Fans are encouraged to plan routes in advance and allow extra time when traveling to and from stadiums.</p>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold font-outfit mt-2 sm:mt-3">Weather</h1>
        <p className="text-justify sm:text-left leading-relaxed">Weather conditions during the 2026 FIFA World Cup will vary depending on the host city and match location. Some cities may experience hot and sunny conditions, while others could be cooler or more humid. Fans should check local weather forecasts, dress appropriately, and prepare for outdoor activities. Sunscreen, hats, rain gear, and comfortable footwear are recommended for matchdays and fan events.</p>
      </div>
    </div>
  )
}

export default FanGuide;