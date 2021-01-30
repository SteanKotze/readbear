import './App.css';
import './custom.css';
import mobile_svg from './mobile.svg';

function App() {
  return (
    <div class="App flex flex-col min-h-screen">
      <nav class="md:flex pt-6 lg:px-20 shadow-rb_md_header">
        <div class="container flex justify-start pb-6">
          <a href="#" class="text-48px font-bold text-black md:pl-20">app.</a>
          <a href="#" class="text-48px font-bold text-rb_purple">me</a>
        </div>
        <div class="container md:flex md:justify-end md:pr-20">
          <a href="#" class="text-26px font-bold text-rb_purple md:pb-5 pt-1 w-133px md:text-center">Why</a>
          <a href="#" class="text-26px font-bold text-rb_purple pb-5 pt-1 w-133px md:text-center">Contact</a>
        </div>
      </nav>
      <div class="static body lg:flex flex-grow lg:px-20">
        <div class="md:pl-20 lg:w-1/2">
          <div class="fs-96 fw-700 pb-10">
            the coolest new app...
          </div>
          <div class="fc-dark-gray fs-22 fw-700">
            get notified when we go live
          </div>
          <div class="w-1/2 pt-5">
            <input type="text" class="focus:outline-none fs-26 fw-500 pl-5 my-auto email-input" placeholder="your@cool.email"/>
            <a class="email-button flex mt-5 fs-22 fw-700" href="">Join Waitlist</a>
          </div>
        </div>
        <div class="lg:w-1/2 img-w700">
          <img src={mobile_svg} alt="Mobile SVG"/>
        </div>
        <div class="absolute bg-rect"></div>
      </div>
      <div class="footer flex pt-6 lg:px-20 bg-rb_light_purple fs-22">
        <div class="footer_text md:my-auto md:flex">
          <div class="flex">
            <p class="font-bold text-black md:pl-20">app.</p>
            <p class="font-bold text-rb_purple md:pr-10">me</p>
          </div>
          <div class="md:flex">
            <p class="footer_box fw-500 text-rb_gray">github</p>
            <p class="footer_box fw-500 text-rb_gray">twitter</p>
            <p class="footer_box fw-500 text-rb_gray">facebook</p>
          </div>
        </div>
        <div class="footer_text md:my-auto container flex justify-end md:pr-20">
          <p class="footer_box fw-500 text-rb_gray">privacy</p>
          <p class="footer_box fw-500 text-rb_gray">terms</p>
        </div>
      </div>
    </div>
  );
}

export default App;
