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
function setResponsive() {
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

    $('#mtf_token').attr('src', 'assets/images/token/mtf_token_mb.png')
    $('#avalanche').attr('src', 'assets/images/supportchain/avalanche_mb.png')
    $('#iw-roadmap-inner').addClass('container')
    $('#iw-supported-wrap').addClass('container')
    $('#iw-token-ifw-wrap').addClass('container')
    $('#iw-token-mtf-wrap').addClass('container')
    $('#iw-game-economy-wrap').addClass('container')
  } else {
    $('.advisors-slide').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      arrows: true
    })
    $('.iw-news-slide').slick('unslick');
    $('.iw-news-slide').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      arrows: true
    })
  }
}
$(window).on('resize', () => {
  setResponsive()
})
$(document).ready(function () {
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop()
    if (wScroll >= 80) {
      $('.iw-header').addClass('sticky')
    } else {
      $('.iw-header').removeClass('sticky')
    }
  })

  if ($(window).scrollTop() >= 80) {
    $('.iw-header').addClass('sticky')
  } else {
    $('.iw-header').removeClass('sticky')
  }

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

  setResponsive()

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
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true
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
    asNavFor: '.iw-media-slide-nav',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '30px'
        }
      }
    ]
  })
  $('.iw-media-slide-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.iw-media-slide',
    dots: false,
    arrows: false,
    focusOnSelect: true
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
        }
      },
      {
        breakpoint: 1200, // Màn hình xl (1200px trở lên)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 576, // Màn hình sm (576px - 767px)
        settings: {
          slidesToShow: 1.5, // Hiển thị 1.5 item
          slidesToScroll: 1.5,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 0, // Màn hình xs (dưới 576px)
        settings: {
          slidesToShow: 1, // Hiển thị 1 item
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  })

  $('.bruce-box-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true
  })
})
const BRUCE_ITEMS = [
  {
    background: '/assets/images/background/bruce.png',
    image: '/assets/images/bruce-img-1.png',
    title: 'Winston',
    description:
      'Adam is one of the youngest successors to the Pacific shipping corporation, while his peers are enjoying themselves, Adam chooses to equip the fleet and become the king of ocean shipping.',
    ada: '/assets/images/Ada-1.png',
    stats: {
      atk: [289, 650],
      def: [148, 300],
      cmd: [320, 600]
    }
  },
  {
    background: '/assets/images/background/bruce.png',
    image: '/assets/images/bruce-img-2.png',
    title: 'CORNELIA',
    description:
      'Allied naval alliances need excellent naval generals, Ada graduated from the naval academy excellently, joined the army, and captained a new rocket cruiser.',
    ada: '/assets/images/Ada-2.png',
    stats: {
      atk: [300, 650],
      def: [150, 300],
      cmd: [500, 600]
    }
  },
  {
    background: '/assets/images/background/bruce.png',
    image: '/assets/images/bruce-img-3.png',
    title: 'Bruce',
    description: `Once a Confederate Army combat commander, with painful memories of the war, George returned to the Confederate Academy to work as a teacher. The rookies who have undergone George's training immediately call him ""The Devil's Teacher`,
    ada: '/assets/images/Ada-3.png',
    stats: {
      atk: [452, 650],
      def: [148, 300],
      cmd: [400, 600]
    }
  },
  {
    background: '/assets/images/background/bruce-4.png',
    image: '/assets/images/bruce-img-4.png',
    title: 'NATASHA',
    description: `Once a Confederate Army combat commander, with painful memories of the war, George returned to the Confederate Academy to work as a teacher. The rookies who have undergone George's training immediately call him ""The Devil's Teacher`,
    ada: '/assets/images/Ada-4.png',
    stats: {
      atk: [372, 650],
      def: [228, 300],
      cmd: [267, 600]
    }
  },
  {
    background: '/assets/images/background/bruce-5.png',
    image: '/assets/images/bruce-img-5.png',
    title: 'ADAM',
    description: `Once a Confederate Army combat commander, with painful memories of the war, George returned to the Confederate Academy to work as a teacher. The rookies who have undergone George's training immediately call him ""The Devil's Teacher`,
    ada: '/assets/images/Ada-5.png',
    stats: {
      atk: [228, 650],
      def: [172, 300],
      cmd: [500, 600]
    }
  }
]
function setBruceSlideByIndex(slideIndex) {
  const activeSlide = BRUCE_ITEMS[slideIndex]
  $('.iw-bruce-2').css('background-image', `url('${activeSlide.background}')`)
  $('.iw-bruce-2 .image').attr('src', activeSlide.image)
  $('.iw-bruce-2 .iw-section-title span').text(activeSlide.title)
  $('.iw-bruce-2 .box-title span').text(activeSlide.title)
  $('.iw-bruce-2 .box-text p').text(activeSlide.description)
  $('.iw-bruce-2 .icon img').attr('src', activeSlide.ada)
  $('.iw-bruce-2 .points .point:nth-child(1) span:last-child()').text(
    `${activeSlide.stats.atk[0]}/${activeSlide.stats.atk[1]}`
  )
  $('.iw-bruce-2 .points .point:nth-child(2) span:last-child()').text(
    `${activeSlide.stats.def[0]}/${activeSlide.stats.def[1]}`
  )
  $('.iw-bruce-2 .points .point:nth-child(3) span:last-child()').text(
    `${activeSlide.stats.cmd[0]}/${activeSlide.stats.cmd[1]}`
  )
}
$('.bruce-box-slide').on(
  'beforeChange',
  function (_event, _slick, _currentSlide, nextSlide) {
    setBruceSlideByIndex(nextSlide)
  }
)
$('.bruce-box-slide .item').on('click', function () {
  const slideIndex = $(this).data('slide')
  $('.bruce-box-slide').slick('slickGoTo', slideIndex)
})
