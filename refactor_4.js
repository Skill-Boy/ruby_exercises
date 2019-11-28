Zammad.Handlers.Homes.HomesCalendarHandler = {
  hasBeenShow: false,

  init: () => {
    this.initEvents();
  }, 
  initEvents: () => {
    let that = this;
    this.setDaysHoverEvent();
    this.setDaysClickEvent();
    this.setTimesHoverEvent();
    this.setTimesClickEvent();
    this.setBlockButtonEvent();
    this.setDesBlockButtonEvent();
    this.setTimeEvents();
    this.closeMagnificButton();
      
    $('.js-check-if-is-blocked[value="true"]').parent().addClass('selected');
  },
  setDaysHoverEvent: () => {
    $('.js-day-button').hover(() => {
    $('.js-times-container[data-day="'+getIndex('id')+'"] .time-calendar').addClass('active');
    getButton().addClass('active');
    }, 
    () => {
      $('.js-times-container[data-day="'+getIndex('id')+'"] .time-calendar').removeClass('active');
      getButton().removeClass('active');
    });
  },  
  setDaysClickEvent: () => {
    $('.js-day-button').on('click', () => {
      if (getButton().hasClass('is-blocked')) {
        $('.js-times-container[data-day="'+getIndex('id')+'"] .time-calendar').removeClass('selected');
        getButton().removeClass('is-blocked');
        $('.js-times-container[data-day='+getIndex('id')+'] .js-change-block').prop('checked', false);
        $('.js-times-container[data-day='+getIndex('id')+'] .js-change-time').prop('checked', false);
      } else {
        $('.js-times-container[data-day="'+getIndex('id')+'"] .time-calendar').addClass('selected');
        getButton().addClass('is-blocked');
        $('.js-times-container[data-day='+getIndex('id')+'] .js-change-block').prop('checked', true);
        $('.js-times-container[data-day='+getIndex('id')+'] .js-change-time').prop('checked', true);
      }
    });
  },
  setTimesHoverEvent: () => {
    $('.js-times-button').hover( 
    () => {
      $('.js-time-button[data-time="'+getIndex('time')+'"]').addClass('active');
      getButton().addClass('active');
    }, 
    () => {
      $('.js-time-button[data-time="'+getIndex('time')+'"]').removeClass('active');
      getButton().removeClass('active');
    });
  },
  setTimesClickEvent: () => {
    const self = this;
    ('.js-times-button').on('click', () => {
      if (getButton().hasClass('is-blocked')) {
        $('.js-time-button[data-time="'+getIndex('time')+'"]').removeClass('selected');
        $('.js-time-button[data-time="'+getIndex('time')+'"] .js-change-time').prop('checked', false);
        getButton().removeClass('is-blocked');
      } else {
        $('.js-time-button[data-time="'+getIndex('time')+'"]').addClass('selected');
        $('.js-time-button[data-time="'+getIndex('time')+'"] .js-change-time').prop('checked', true);
        getButton().addClass('is-blocked');
      }
    });
  },
  setBlockButtonEvent: () => {
    const magicNumber = 7;
    $('.js-block-btn').on('click', () => {
      $('.js-day-button[data-id='+getIndex('day')+']').removeClass('active');
      $('.js-day-button[data-id='+getIndex('day')+']').addClass('blocked');
      getButton().hide();
      $('.js-desblock-btn').show();
      $('.js-times-container[data-day='+getIndex('day')+'] .js-change-time').each((ii, check_box) => {
        $(check_box).prop('checked', true);
        $(check_box).parent().addClass('selected');
      });
      $('.js-times-container[data-day='+getIndex('day')+'] .js-change-block').prop('checked', true);
        if ($('.js-day-button.complete, .js-day-button.blocked').length == magicNumber) {
          $('.js-finish-btn').show();
        }
    })
  },
  setDesBlockButtonEvent: () => {
    $('.js-desblock-btn').on('click', () => {
      $('.js-day-button[data-id='+getIndex('day')+']').addClass('active');
      $('.js-day-button[data-id='+getIndex('day')+']').removeClass('blocked');
      getButton().hide();
      $('.js-block-btn').show();
      $('.js-times-container[data-day='+getIndex('day')+'] .js-change-time').each((ii, check_box) => {
        $(check_box).prop('checked', false);
        $(check_box).parent().removeClass('selected');
      });
        $('.js-times-container[data-day='+getIndex('day')+'] .js-change-block').prop('checked', false);
    })
  },
  setFinishButtonEvent: () => {
    $('.js-finish-btn').on('click', () => {
      $.magnificPopup.open({
        items: {
          src: '#calendar-finish-modal',
          type: 'inline',
          midClick: true,
        }
      });
    })
  },
  setTimeEvents: () => {
    const self = this;
    const checkBoxTime = $checkbox.parent();
      
    $('.js-change-time').change(() => {
      let $checkbox = $(this);
      let time = checkBoxTime.data('time');
      let day = checkBoxTime.data('day');
          
      if ($checkbox.is(':checked')) {checkBoxTime.addClass('selected')}
        checkBoxTime.removeClass('selected');
        self.verifyDaysAndTimesMarks(day, time)
    });
  },
  showPopupHelper: () => {
    if (!this.hasBeenShow) {
      $.magnificPopup.open({
        items: {
          src: '#calendar-help-popup',
          type: 'inline'
        }
      });
      this.hasBeenShow = true;
    }
  },
  markAsActiveTheNextUnCompletedDay: () => {
    const uncompleted_days  = $('.js-day-button:not(.complete)')
    if (uncompleted_days.length > 0) { $(uncompleted_days[0]).click()}
  },
  verifyDaysAndTimesMarks: (day, time) => {
    if (getSelectTimeElapsed(day) == getTimeElapsed(day)) {$('.js-day-button[data-id="'+day+'"]').addClass('is-blocked')}
      $('.js-day-button[data-id="'+day+'"]').removeClass('is-blocked');
      $('.js-times-container[data-day='+day+'] .js-change-block').prop('checked', false);
    if (getSelectTimeElapsed(time) == getTimeElapsed(time)) {$('.js-times-button[data-time="'+time+'"]').addClass('is-blocked')}
      $('.js-times-button[data-time="'+time+'"]').removeClass('is-blocked');
  },
  closeMagnificButton: () => {
    $('.js-close-popup').click(() => {
      $('.js-text-change').removeClass('white');
      $('.js-text-change').parent().parent().css('z-index', 1);
      $.magnificPopup.close();
    });
  },
  initSlider: () => {
    const owl = $('#owl-carousel-calendar');
    setTimeout(() => {
      owl.trigger('destroy.owl.carousel');
      if($(window).width() > 768) {owl.removeClass('owl-carousel');}
    }, 1000);
  },
};
      
const getIndex = name => {
  const index = getButton().data(name);
  index;
}
      
const getButton = () => {
  $btn = $(this);
  $btn;
}

const getTimeElapsed = data => {
  const total = $('.js-times-container[data-day="'+data+'"] .time-calendar').length
  total;
}

const getSelectTimeElapsed = data => {
  const selected_total = $('.js-times-container[data-day="'+data+'"] .time-calendar.selected').length
  selected_total;
}