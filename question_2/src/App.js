import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="App">
      <nav class="md:flex pt-6 px-12">
        <div class="container flex justify-start pb-6">
          <p class="text-rb_lg font-bold text-black">app.</p>
          <p class="text-rb_lg font-bold text-rb_purple">me</p>
        </div>
        <div class="container md:flex md:justify-end sm:justify-start">
          <div class="text-rb_md font-bold text-rb_purple md:pb-5 pt-1 w-133px md:text-center">Why</div>
          <div class="text-rb_md font-bold text-rb_purple pb-5 pt-1 w-133px md:text-center">Contact</div>
        </div>
      </nav>
    </div>
  );
}

export default App;
