function formatAddress(address) {
    let firstPart = address.substring(2, 22) 
  
    let lastPart = address.slice(-5)
  
    return `${firstPart}...${lastPart}`
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  $(document).ready(function () {
    var screenWidth = $(window).width()
  
    if (screenWidth <= 475) {
      $('#bg-banner').before(
        '<img src="assets/images/bg_mobile_behind.png" alt="" class="bg_mobile_behind"/>'
      )
      $('#bg-banner').after(
        '<img src="assets/images/banner_moblie_shadow.png" alt="" class="bg_mobile_shadow"/>'
      )
      $('#bg-banner img').attr('src', 'assets/images/bg_mobile.png')
      $('#bg-banner').css('z-index', '1')
  
      // const MTF_address = $('#MTF_address').text()
      // $('#MTF_address').text(formatAddress(MTF_address))
  
      // const IFW_address = $('#IFW_address').text()
      // $('#IFW_address').text(formatAddress(IFW_address))
      $('#milestone_bg').attr('src', 'assets/images/milestone_mobile_bg.png')
      $('#milestone_core_mobile').attr('src', 'assets/images/milestone_core_mobile.png')
      
    } else {
      console.log('Màn hình lớn hơn 475px.')
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
        $('#header-menu').css('left', '-100%');
      }
    })
  })
  