$(document).ready(function(){
    let imgSrc = ["https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_tenet_13_1.jpg","https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/t/n/tnm_poster_shadow_1_1__1.jpg","https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_hvqv_5_final_1__1.jpg","https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/n/o/notn_4_poster_vie_1.jpg","https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/s/o/social-poster-kcnd_1.jpg","https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_rogue_2_1__1.jpg","https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_1_5.jpg","https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/m/y/my-love_poster_1__1.jpg","https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/m/a/main-poster_ms1_1.jpg","https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_peninsula_1.jpg"];
    let movie_data = [{"id":0,"name":"TENET","src":"https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_tenet_13_1.jpg"},{"id":1,"name":"TENET","src":"https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_tenet_13_1.jpg"},{"id":2,"name":"DỊ NHÂN THẾ HỆ MỚI","src":"https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/t/n/tnm_poster_shadow_1_1__1.jpg"},{"id":3,"name":"ÁC QUỶ ĐỐI ĐẦU ","src":"https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/m/a/main-poster-aqdd_1.jpg"},{"id":4,"name":"ĐỐI ĐẦU","src":"https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/_/i/_i_u_-_international_poster_1__4.jpg"},{"id":5,"name":"ĐẦU GẤU BĂC CỰC: KÌ NGHỈ VUI NHỘN","src":"https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/n/o/notn_4_poster_vie_1.jpg"},{"id":6,"name":"HỌC VIỆN QUÁI VẬT: DU HỌC SINH","src":"https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_hvqv_5_final_1__1.jpg"},{"id":7,"name":"HẦM QUỶ ","src":"https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_1_5.jpg"},{"id":8,"name":"KẺ CẮP NHÂN DẠNG","src":"https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/s/o/social-poster-kcnd_1.jpg"},{"id":9,"name":"BIỆT ĐỘI SĂN MỒI","src":"https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_rogue_2_1__1.jpg"},{"id":10,"name":"MÌNH ƠI, XIN ĐỪNG QUA SÔNG!","src":"https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/m/y/my-love_poster_1__1.jpg"},{"id":11,"name":"ĐIỆP VIÊN SIÊU LẦY ","src":"https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/m/a/main-poster_ms1_1.jpg"},{"id":12,"name":"BÁN ĐẢO PENINSULA","src":"https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_peninsula_1.jpg"}];
    $(window).scroll(function(e){
        const scrollTop = document.documentElement.scrollTop;
        if(scrollTop>80){
            $('header').addClass('header-active');
        }
        else{
            $('header').removeClass('header-active');
        }
    })
    imgSrc.forEach(function(img){
        $('#movie-carousel').append(`
        <div class="item">
        <div class="card"><img src="${img}" alt="" class="card-img-"></div>
    </div>
        `)
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
})