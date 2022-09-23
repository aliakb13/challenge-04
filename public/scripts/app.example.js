class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.selectDriver = document.getElementById("tipe-driver");
    this.date = document.getElementById("date");
    this.time = document.getElementById("time");
    this.capacity = document.getElementById("capacity");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    this.carContainerElement.innerHTML = "";
    const avail = this.selectDriver.value == "ds" ? true : false;
    const combined = this.date.value + "T" + this.time.value;
    const getCapacity = this.capacity.value;
    const parseDateTime = Date.parse(combined);

    if (this.selectDriver.value == "" || this.date.value == "" || this.time.value == "") {
      alert("Tipe driver, tanggal, waktu tidak boleh kosong!");
    } else {
      Car.list.forEach((car) => {
        const parseDataObject = Date.parse(car.availableAt);

        if (getCapacity == "") {
          if (car.available == avail &&
            parseDateTime >= parseDataObject) {
            const node = document.createElement("div");
            node.className = 'col-md-6 col-sm-12 col-lg-4';
            node.innerHTML = car.render();
            this.carContainerElement.appendChild(node);
          }
        } else if (car.available == avail &&
          parseDateTime >= parseDataObject && getCapacity != "" &&
          car.capacity == getCapacity) {
          const node = document.createElement("div");
          node.className = 'col-md-6 col-sm-12 col-lg-4';
          node.innerHTML = car.render();
          this.carContainerElement.appendChild(node);
        }
        // console.log(parseDataObject)
        // console.log(parseDateTime);
      });
    }
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
