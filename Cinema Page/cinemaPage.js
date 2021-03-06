$(document).ready(function () {
  $(window).scroll(function (e) {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 80) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }
  });
});
let movie_data = [];
function getDataMovies() {
  //Get data from server
  //fetch will return promise
  //if success => then => then will return data
  //fail => catch => catch will return error
  // ----cách dùng bằng js thuần----
  // fetch('https://5f57af681a07d600167e72d2.mockapi.io/api/movies')
  // .then((res) => { //success
  //     return res.json();
  // }).catch((err) => { //fail
  //     console.log('#err',err);
  // })
  //cách dùng bằng Jquery
  $.ajax("https://5f57af681a07d600167e72d2.mockapi.io/api/movies", {
    success: function (data) {
      //success
      $("#movie-loading").hide();
      movie_data = data; // gán dữ liệu lấy từ server về thành movie_data
      renderUI();
      console.log(data);
    },
    error: function (err) {
      //fail
      console.log(err);
    },
  });
}
getDataMovies();
function renderUI() {
  movie_data.forEach(function (movie) {
    $("#movie-carousel").append(`
        <div class="item" id="${movie.id}">
            <div class="card">
                <img src="${movie.src}" alt="${movie.name}" onclick="showInfo(event)">
            </div>
         </div>
        `);
  });

  $("#movie-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
}
//elements
const dropdown_value = $(".dropdown .dropdown-value");
const dropdown_menu = $(".dropdown .dropdown-menu");
const slot_date = $("#slot_date");
const time_left_value = $(".time-left h4");
const seats = $(".seats");
const screen = $("#screen");
const selected_seat_element = $("#selected_seat");
const ticket_price_element = $("#ticket_price");

//default value
let time_index = 0;
let total_seat = 40;
let selected_seat = [];
let total_price = 0;

//Generate HTML
function generateDropdownItem(value, index) {
  return `<a href="" class="dropdown-item" onclick="changeIndex(${index})" data-index="${index}">${value}</a>`;
}
function generateSeat(index, booked) {
  return `
    <div class="seat ${booked ? "booked" : ""}" onclick=${
    booked ? null : `"select(${index})"`
  }>
        <img src="img/seat01.png" alt="">
        <p style="color: #FFF">${index}</p>
    </div>
    `;
}

//Change displayed time and date
function changeIndex(index) {
  event.preventDefault();
  time_index = index;
  const slots = selected_movie.slots;
  slot_date.text(moment(slots[time_index].time).format("ddd MM, DD YYYY"));
  dropdown_value.text(moment(slots[time_index].time).format("hh:MM A"));
  //slot_date.text(moment(slots[time_index].time).format("ddd MM, DD YYYY"));
  console.log(slot_date);
  const time_remain = (slots[time_index].time - Date.now()) / 1000; //calculate remaining time. Milisec/1000 => sec
  if (time_remain > 0) {
    time_left_value.text(
      `${Math.floor(time_remain / 60)}:${Math.floor(time_remain % 60)}`
    );
  } else {
    time_left_value.text("00:00");
  }
  renderSeats(); //render ghế khi chọn xuất chiếu
  // screen.show();
}
function showInfo(event) {
  // console.log(event.target.alt, event.target.src);
  const movie_name = event.target.alt; //khi có event(click) sẽ target vào tên của phim ---> cái này show tên
  const id = $(event.target).parent().parent()[0].id; //lấy id trên thẻ div ---> lấy id để có slot phim
  $("#movie-detail h3").text(movie_name); //---> cái này show tên

  //khong khai bao kieu de biet la global
  selected_movie = movie_data.find(function (movie) {
    //function này đi qua từng movie tìm object có id tương ứng ---> lấy id để có slot phim
    return movie.id == id; //trả về object movie có id tương ứng với id trên div để gán vô selected_movie ---> lấy id để có slot phim
  });
  const slots = selected_movie.slots;
  time_index = 0;
  //console.log(selected_movie);

  dropdown_value.text("");
  slot_date.text("");
  slot_date.text(moment(slots[time_index].time).format("ddd MM, DD YYYY"));
  dropdown_value.text(moment(slots[time_index].time).format("hh:MM A")); //show mặc định slot 0 trên button
  dropdown_menu.empty();

  slots.forEach(function (slot, id) {
    dropdown_menu.append(
      generateDropdownItem(moment(slot.time).format("hh:MM A"), id)
    );
  });
  screen.show();
  renderSeats(); //lần đầu chọn phim sẽ render ghế
}

function renderSeats() {
  seats.empty(); //mỗi lần chọn giờ khác không render thêm nữa
  selected_seat_element.empty();
  ticket_price_element.empty();
  selected_seat = [];
  const booked = selected_movie.slots[time_index].booked_seats;
  for (let i = 0; i < total_seat; i++) {
    const is_booked = booked.indexOf(i) >= 0; //ghế nào != -1 thì là chưa đặt
    seats.append(generateSeat(i, is_booked));
  }
}

function select(index) {
  if (selected_seat.indexOf(index) >= 0) {
    //nếu những index(số ghế) nào đã có trong mảng selected_seat ---> mục đích để khi chọn ghế rồi bỏ chọn thì không lưu lại nữa (toggle)
    selected_seat = selected_seat.filter(function (seat) {
      //filter duyệt qua từng phần tử trong mảng, trả về 1 mảng mới đã filter
      return seat !== index; //trả về phần tử nào khác với phần tử đã có trong mảng
    });
  } else {
    selected_seat.push(index); //còn index nào chưa có thì push vào mảng
  }
  console.log(event.target);
  $(event.target).toggleClass("selected");
  total_price = selected_seat.length * selected_movie.price;
  selected_seat_element.text(selected_seat);
  ticket_price_element.text("€" + total_price);
}
