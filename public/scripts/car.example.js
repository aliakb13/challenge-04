class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card mt-3">
    <img src="${this.image}" class="card-img-top" height="400" style="object-fit: cover" alt="${this.manufacture}">
    <div class="card-body">
    <p class="card-text">${this.manufacture}/${this.model}/${this.type}</p>
    <h5 class="card-title"><b>Rp.${this.rentPerDay} / Hari</b></h5>
    <p class="card-text">${this.description}</p>
    <div class="d-flex">
    <img src="images/fi_users.png">
    <p class="card-text ms-3 mt-1">${this.capacity}</p>
    </div>
    <div class="d-flex mt-3">
    <img src="images/fi_settings.png">
    <p class="card-text ms-3 mt-1">${this.transmission}</p>
    </div>
    <div class="d-flex mt-3">
    <img src="images/fi_calendar.png">
    <p class="card-text ms-3 mt-1">${this.year}</p>
    </div>
    <p class="card-text mt-3">${this.availableAt}</p>
    <div class="row">
    <button class="d-grip gap-2 btn btn-success btn-lg" type="submit" style="background-color: #5CB85F;">Pilih Mobil</button>
    </div>
    </div>
    `;
  }
}
