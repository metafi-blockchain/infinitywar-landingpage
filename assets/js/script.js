const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
)
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
)
function formatAddress(address) {
  let firstPart = address.substring(2, 22)

  let lastPart = address.slice(-5)

  return `${firstPart}...${lastPart}`
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

$(document).ready(function () {
  $('#header-menu-btn').click(function () {
    const buttonToggleSrc = $('#header-menu-btn img').attr('src')
    if (buttonToggleSrc == 'assets/images/icons/menu.svg') {
      $('#header-menu').css('left', '0')
      delay(250).then(() => {
        $('#header-menu').css('background-color', 'rgba(0,0,0,0.7)')
      })
      $('#header-menu-btn img').attr('src', 'assets/images/icons/close.svg')
      $('#header-menu-btn img').attr('height', '32px')
      $('#header-menu-btn img').attr('width', '32px')
    } else {
      $('#header-menu-btn img').attr('src', 'assets/images/icons/menu.svg')
      $('#header-menu').css('background-color', 'unset')
      $('#header-menu').css('left', '-100%')
    }
  })

  $('#tab-1').css('display', 'none')
  $('#tab-2').css('display', 'flex')
  $('#tab-3').css('display', 'none')

  $('#news-tab-1').click(function () {
    $('#news-tab-1').addClass('warning')
    $('#news-tab-2').removeClass('warning')
    $('#news-tab-3').removeClass('warning')
    $('#tab-2').css('display', 'none')
    $('#tab-3').css('display', 'none')
    $('#tab-1').css('display', 'block')
  })

  $('#news-tab-2').click(function () {
    $('#news-tab-2').addClass('warning')
    $('#news-tab-1').removeClass('warning')
    $('#news-tab-3').removeClass('warning')

    $('#tab-1').css('display', 'none')
    $('#tab-3').css('display', 'none')
    $('#tab-2').css('display', 'flex')
  })

  $('#news-tab-3').click(function () {
    $('#news-tab-3').addClass('warning')
    $('#news-tab-1').removeClass('warning')
    $('#news-tab-2').removeClass('warning')

    $('#tab-1').css('display', 'none')
    $('#tab-2').css('display', 'none')
    $('#tab-3').css('display', 'block')
  })

  const listItem = $('.news-item')

  listItem.each(function (item) {
    const itemId = listItem[item].id

    $(`#${itemId}`).click(function () {
      const itemId = listItem[item].id
      listItem.each(function (item) {
        const eachItemId = listItem[item].id
        $(`#${eachItemId}`).removeClass('active')
      })

      $(`#${itemId}`).addClass('active')
      const srcImg = $(`#${itemId} img`).attr('src')

      if (srcImg) {
        if (itemId !== 'item-2') {
          $('#news-image').attr('src', srcImg)
        } else {
          $('#news-image').attr('src', 'assets/images/news-image-1.png')
        }
      }
    })
  })

  var screenWidth = $(window).width()

  if (screenWidth <= 1024) {
    $('#milestone_core_mobile').attr(
      'src',
      'assets/images/milestone/milestone_core_mobile.png'
    )
    $('#milestone_bg').attr(
      'src',
      'assets/images/milestone/milestone_mobile_bg.png'
    )

    $('#milestone_core_bg').attr(
      'src',
      'assets/images/milestone/milestone_core-bg_mobile.png'
    )

    $('#bruce-bg').attr('src', 'assets/images/bruce/bruce_bg_mb.png')
    $('#mtf_token').attr('src', 'assets/images/token/mtf_token_mb.png')
    $('#avalanche').attr('src', 'assets/images/supportchain/avalanche_mb.png')
    $('#iw-roadmap-inner').addClass('container')
    $('#iw-supported-wrap').addClass('container')
    $('#iw-token-ifw-wrap').addClass('container')
    $('#iw-token-mtf-wrap').addClass('container')
    $('#iw-game-economy-wrap').addClass('container')
  }

  if (screenWidth > 1024) {
    $('.advisors-slide').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      arrows: true
    })
  }

  if (screenWidth <= 475) {
    $('#bg-banner').before(
      '<img src="assets/images/bg_mobile_behind.png" alt="" class="bg_mobile_behind"/>'
    )
    $('#bg-banner').after(
      '<img src="assets/images/banner_moblie_shadow.png" alt="" class="bg_mobile_shadow"/>'
    )
    $('#bg-banner img').attr('src', 'assets/images/bg_mobile.png')
    $('#bg-banner').css('z-index', '1')

    $('#lands-bg').attr('src', 'assets/images/land/land_bg_mobile.png')
  }

  $('.iw-news-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })

  $('.iw-media-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    centerPadding: '100px',
    asNavFor: '.iw-media-slide-nav'
  })
  $('.iw-media-slide-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.iw-media-slide',
    dots: false,
    arrows: false,
    focusOnSelect: true
  })

  $('.iw-news-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true
  })

  $('.leadership-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1440, // Màn hình xl (1200px trở lên)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4
        }
      },
      {
        breakpoint: 1200, // Màn hình xl (1200px trở lên)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 576, // Màn hình sm (576px - 767px)
        settings: {
          slidesToShow: 1.5, // Hiển thị 1.5 item
          slidesToScroll: 1.5,
          initialSlide: 1.5,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 0, // Màn hình xs (dưới 576px)
        settings: {
          slidesToShow: 1, // Hiển thị 1 item
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  })
})
