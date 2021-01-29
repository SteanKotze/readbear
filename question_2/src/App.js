import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="App">
      <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#pablo"
            >
              pink Tailwind Starter Kit
            </a>
            <button
              class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <div
            class={
              "lg:flex flex-grow items-center"}
            id="example-navbar-danger"
          >
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span class="ml-2">Share</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i class="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span class="ml-2">Tweet</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span class="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
