import React from "react";

const ExcellenceSection = () => {
  return (
    <>
      {/* Excellence Section */}
      <section className="py-16 mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-center mt-12 mb-6">
          Excellence in Every Morsel
        </h2>
        <p className="px-2 md:px-20 lg:px-32 items-center text-center mb-12 leading-relaxed">
          Mcube has grown to be synonymous with premium quality Indian Sweets. 
          It has created a niche for itself for being one of the giftable brands in Tirunelveli today.
        </p>
        <div className="flex justify-center">
          <img
            src="/images/hero5.jpg"
            alt="Premium Indian sweets in tray"
            className="w-full h-auto shadow-lg"
          />
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-transparent lg:px-20 xl:px-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Quality that Ddlights, in every bite
              </h2>
              <p className="mb-6 leading-relaxed">
                At MCube Sweets, we blend tradition with precision. Every sweet is
                prepared using premium-grade ingredients and time-honored recipes
                that have delighted generations. From sourcing to crafting, our artisans ensure each bite brings
                joy, purity, and the authentic taste of India to your celebration.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src="/images/hero1.jpg"
                alt="Kaju Katli and other sweets"
                className="rounded-lg shadow-sm w-full md:max-w-md lg:max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-transparent lg:px-20 xl:px-32" id="aboutus">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img
                src="/images/hero1.jpg"
                alt="Family behind MCube Sweets"
                className="rounded-xl shadow-md w-full md:max-w-md lg:max-w-sm mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-lg md:text-2xl font-medium mb-2">
                About Us
              </h3>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Taste of Sweet India
              </h2>
              <p className="leading-relaxed">
                MCube Sweets was born out of a love for India’s rich dessert traditions.
                What began as a humble kitchen vision is now a trusted name for purity,
                authenticity, and taste. We strive to spread sweetness to every home,
                festival, and occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Methods Section */}
      <section className="py-16 bg-transparent lg:px-20 xl:px-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <h3 className="text-lg md:text-2xl font-medium mb-2">
                Our Philosophy
              </h3>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Luxurious Mithais, Accessible To Everyone
              </h2>
              <p className="leading-relaxed">
                Every sweet at MCube is made using traditional techniques passed down
                over generations. We honor the legacy of sweet-making with modern
                precision to ensure purity, taste, and freshness in every bite.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src="/images/hero1.jpg"
                alt="Handcrafted sweets being made"
                className="rounded-xl shadow-md w-full md:max-w-md lg:max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-center mb-8">Awards and Accreditations</h2>
        <p className="text-center max-w-6xl mx-auto mb-8 ">
          Our commitment to quality and excellence has been recognized through various awards and certifications. We
          adhere to the highest standards of food safety and quality, ensuring that our customers get nothing but the
          best.
        </p>
        <p className="text-center max-w-6xl mx-auto mb-12">
          Our commitment to quality and excellence has been recognized through various awards and certifications. We
          adhere to the highest standards of food safety and quality, ensuring that our customers get nothing but the
          best.
        </p>
        <h3 className="text-lg md:text-2xl font-medium mb-2 text-center">
          Priority
        </h3>
        <h3 className="text-xl md:text-3xl font-medium mb-2 text-center">
          Certifications
        </h3>
        <div className="flex justify-center gap-12 md:gap-24 lg:gap-48 mt-8 flex-wrap">
          <div className="w-16 h-16 flex items-center justify-center">
            <img src="/images/1999.png" alt="OP" width={64} height={64} />
          </div>
          <div className="w-16 h-16 flex items-center justify-center">
            <img src="/images/iso.png" alt="ISO" width={64} height={64} />
          </div>
          <div className="w-16 h-16 flex items-center justify-center">
            <img src="/images/fssai3.png" alt="FSSAI" width={64} height={64} />
          </div>
          <div className="w-16 h-16 flex items-center justify-center">
            <img src="/images/fda.png" alt="FDA" width={64} height={64} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExcellenceSection;
