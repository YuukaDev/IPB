export default function Category({ products }) {
  return (
    <div id="hottest">
      {" "}
      <div className="text-navigationColor text-center mt-20">
        <h1 className="text-lg mb-10 tracking-heroWide uppercase leading-3">
          See More Categories
        </h1>
        <div class="flex items-center justify-center">
          <div className="inline-grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8">
            <div class="category bg-black w-96 h-72 text-white text-lg font-bold text-center p-10 rounded-lg">
              <div
                className="flex justify-between items-center"
              >
                <h1 className="z-10">Action</h1>
                <img
                  className="h-56 mb-10"
                  src="https://www.instant-gaming.com/themes/igv2/modules/category/images/category-icon1.png"
                />
              </div>
            </div>

            <div class="bg-black  text-white text-lg font-bold text-center p-10 rounded-lg"></div>
            <div class="bg-black text-white text-lg font-bold text-center p-10 rounded-lg"></div>
            <div class="bg-black w-96 h-72 text-white text-lg font-bold text-center p-10 rounded-lg"></div>
            <div class="bg-black text-white text-lg font-bold text-center p-10 rounded-lg"></div>
            <div class="bg-black text-white text-lg font-bold text-center p-10 rounded-lg"></div>
            <div class="bg-black w-96 h-72 text-white text-lg font-bold text-center p-10 rounded-lg"></div>
            <div class="bg-black text-white text-lg font-bold text-center p-10 rounded-lg"></div>
            <div class="bg-black text-white text-lg font-bold text-center p-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

