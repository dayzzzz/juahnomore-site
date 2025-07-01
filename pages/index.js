export default function JuahNoMoreLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-100 text-gray-800 font-sans">
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">JuahNoMore</h1>
        <p className="text-xl mb-6">Say Goodbye to Heat. Hello, Cool Sleep.</p>
        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="JuahNoMore logo"
            className="w-48 h-48 object-contain"
          />
        </div>
        <div className="mt-8">
          <a
            href="#products"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition"
          >
            Shop Now
          </a>
        </div>
      </section>

      <section id="products" className="bg-white py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Coolest Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-blue-50 rounded-2xl p-6 shadow-md">
              <img
                src={`/product-${item}.jpg`}
                alt={`Product ${item}`}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Cool Bedding Set {item}</h3>
              <p className="text-gray-600 mb-4">Soft. Breathable. Instantly cool to the touch.</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-100 py-20 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Born for Tropical Nights</h2>
        <p className="max-w-xl mx-auto text-lg text-gray-700 mb-6">
          Inspired by Southeast Asian heat, JuahNoMore blends smart fabric tech with effortless comfort.
          From hot nights to chill dreams — we’ve got you covered.
        </p>
        <a
          href="#story"
          className="text-blue-600 font-semibold underline hover:text-blue-800"
        >
          Discover Our Story
        </a>
      </section>

      <section id="story" className="bg-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          JuahNoMore was born out of sleepless nights in Singapore’s heat. We took local slang, added smart cooling tech, and created something cool — literally. Our mission is to help you sleep better, sweat less, and wake up refreshed.
        </p>
      </section>

      <section id="checkout" className="bg-blue-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Chill?</h2>
        <p className="text-lg text-gray-700 mb-6">Add your favorites to cart and enjoy island-wide delivery.</p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-2xl shadow-md">
          Go to Checkout
        </button>
      </section>

      <footer className="bg-white py-10 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} JuahNoMore. All rights reserved.</p>
        <p>Made with 💤 in Singapore | <a className="underline" href="#">EN</a> | <a className="underline" href="#">中文</a></p>
      </footer>
    </main>
  );
}