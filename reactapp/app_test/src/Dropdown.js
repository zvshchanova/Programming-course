const Dropdown = () => {
    return (
  <div classname="dropdown">
    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
    <div id="myDropdown" class="dropdown-content">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
    );
  }
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  export default Dropdown;