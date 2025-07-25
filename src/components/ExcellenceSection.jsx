import React from "react";

const ExcellenceSection = () => {
  return (
    <>
      {/* Excellence Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-[#7B3F00] mb-12">
          Excellence in Every Morsel
        </h2>
        <div className="flex justify-center">
          <img
            src="/images/excellence.jpg"
            alt="Premium Indian sweets in tray"
            className="rounded-xl shadow-md w-full max-w-xl"
          />
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-[#fdfbf8]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif text-[#7B3F00] mb-4">
                Quality that Delights in Every Bite
              </h2>
              <p className="text-[#5c3d18] mb-6 leading-relaxed">
                At MCube Sweets, we blend tradition with precision. Every sweet is
                prepared using premium-grade ingredients and time-honored recipes
                that have delighted generations.
              </p>
              <p className="text-[#5c3d18] leading-relaxed">
                From sourcing to crafting, our artisans ensure each bite brings
                joy, purity, and the authentic taste of India to your celebration.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img
                src="/images/sweets1.jpg"
                alt="Kaju Katli and other sweets"
                className="rounded-lg shadow-sm w-full"
              />
              <img
                src="/images/sweets2.jpg"
                alt="Laddoos and barfis"
                className="rounded-lg shadow-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h3 className="text-lg font-medium text-[#8B4513] mb-2">
              About MCube
            </h3>
            <h2 className="text-3xl font-serif text-[#7B3F00] mb-4">
              A Heritage of Sweetness
            </h2>
            <p className="text-[#5c3d18] leading-relaxed">
              MCube Sweets was born out of a love for India’s rich dessert traditions.
              What began as a humble kitchen vision is now a trusted name for purity,
              authenticity, and taste. We strive to spread sweetness to every home,
              festival, and occasion.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/about.jpg"
              alt="Family behind MCube Sweets"
              className="rounded-xl shadow-md w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Traditional Methods Section */}
      <section className="py-16 bg-[#fdfcf9]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <img
                src="/images/traditional-making.jpg"
                alt="Handcrafted sweets being made"
                className="rounded-xl shadow-md w-full max-w-lg"
              />
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl font-serif text-[#7B3F00] mb-4">
                Crafted by Hand, Honored by Time
              </h2>
              <p className="text-[#5c3d18] leading-relaxed">
                Every sweet at MCube is made using traditional techniques passed down
                over generations. We honor the legacy of sweet-making with modern
                precision to ensure purity, taste, and freshness in every bite.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Awards Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-amber-900 mb-12">Awards and Accreditations</h2>
        <p className="text-center text-amber-800 max-w-3xl mx-auto mb-12">
          Our commitment to quality and excellence has been recognized through various awards and certifications. We
          adhere to the highest standards of food safety and quality, ensuring that our customers get nothing but the
          best.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="w-16 h-16 flex items-center justify-center">
            <img src="/placeholder.svg?height=64&width=64" alt="FSSAI" width={64} height={64} />
          </div>
          <div className="w-16 h-16 flex items-center justify-center">
            <img src="/placeholder.svg?height=64&width=64" alt="ISO" width={64} height={64} />
          </div>
          <div className="w-16 h-16 flex items-center justify-center">
            <img src="/placeholder.svg?height=64&width=64" alt="GMP" width={64} height={64} />
          </div>
          <div className="w-16 h-16 flex items-center justify-center">
            <img src="/placeholder.svg?height=64&width=64" alt="FDA" width={64} height={64} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExcellenceSection;
