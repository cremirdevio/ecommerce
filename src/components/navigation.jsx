import { FaShoppingCart } from "react-icons/fa";

export default function Navigation() {
  return (
    <header className="border-b border-purple-50 sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <a href="/">
          <a className=" cursor-pointer">
            <h1 className="flex no-underline">
              <img
                height="32"
                width="32"
                alt="logo"
                className="h-8 w-8 mr-1 object-contain"
                src="/icon.svg"
              />
              <span className="text-xl font-primary font-bold tracking-tight pt-1">
                Ecommerce
              </span>
            </h1>
          </a>
        </a>
        <div>
          <a href="/cart">
            <a className=" relative" aria-label="cart">
              <FaShoppingCart className="text-purple-500 w-6 m-auto" />
              <div className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3">
                2
              </div>
            </a>
          </a>
        </div>
      </div>
    </header>
  );
}