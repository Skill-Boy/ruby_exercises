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
        $('.js-times-container[data-day="'+setIndex('id')+'"] .time-calendar').addClass('active');
        setButton().addClass('active');
      }, () => {
        $('.js-times-container[data-day="'+setIndex('id')+'"] .time-calendar').removeClass('active');
        setButton().removeClass('active');
        });
      },
      
    setDaysClickEvent: () => {
      $('.js-day-button').on('click', () => {
      if (setButton().hasClass('is-blocked')) {
        $('.js-times-container[data-day="'+setIndex('id')+'"] .time-calendar').removeClass('selected');
        setButton().removeClass('is-blocked');
        $('.js-times-container[data-day='+setIndex('id')+'] .js-change-block').prop('checked', false);
        $('.js-times-container[data-day='+setIndex('id')+'] .js-change-time').prop('checked', false);
      } else {
          $('.js-times-container[data-day="'+setIndex('id')+'"] .time-calendar').addClass('selected');
          setButton().addClass('is-blocked');
          $('.js-times-container[data-day='+setIndex('id')+'] .js-change-block').prop('checked', true);
          $('.js-times-container[data-day='+setIndex('id')+'] .js-change-time').prop('checked', true);
        }
      });
    },
    setTimesHoverEvent: () => {
      $('.js-times-button').hover( () => {
      $('.js-time-button[data-time="'+setIndex('time')+'"]').addClass('active');
      setButton().addClass('active');
      }, () => {
        $('.js-time-button[data-time="'+setIndex('time')+'"]').removeClass('active');
        setButton().removeClass('active');
      });
    },
    setTimesClickEvent: () => {
      let self = this;
      ('.js-times-button').on('click', () => {
      if (setButton().hasClass('is-blocked')) {
        $('.js-time-button[data-time="'+setIndex('time')+'"]').removeClass('selected');
        $('.js-time-button[data-time="'+setIndex('time')+'"] .js-change-time').prop('checked', false);
        setButton().removeClass('is-blocked');
      } else {
          $('.js-time-button[data-time="'+setIndex('time')+'"]').addClass('selected');
          $('.js-time-button[data-time="'+setIndex('time')+'"] .js-change-time').prop('checked', true);
          setButton().addClass('is-blocked');
        }
      });
    },
    setBlockButtonEvent: () => {
      $('.js-block-btn').on('click', () => {
        $('.js-day-button[data-id='+setIndex('day')+']').removeClass('active');
        $('.js-day-button[data-id='+setIndex('day')+']').addClass('blocked');
        setButton().hide();
        $('.js-desblock-btn').show();
        $('.js-times-container[data-day='+setIndex('day')+'] .js-change-time').each((ii, check_box) => {
          $(check_box).prop('checked', true);
          $(check_box).parent().addClass('selected');
        });
        $('.js-times-container[data-day='+setIndex('day')+'] .js-change-block').prop('checked', true);
        if ($('.js-day-button.complete, .js-day-button.blocked').length == 7) {
          $('.js-finish-btn').show();
        }
      })
    },
    setDesBlockButtonEvent: () => {
      $('.js-desblock-btn').on('click', () => {
        $('.js-day-button[data-id='+setIndex('day')+']').addClass('active');
        $('.js-day-button[data-id='+setIndex('day')+']').removeClass('blocked');
        setButton().hide();
        $('.js-block-btn').show();
        $('.js-times-container[data-day='+setIndex('day')+'] .js-change-time').each((ii, check_box) => {
          $(check_box).prop('checked', false);
          $(check_box).parent().removeClass('selected');
        });
        $('.js-times-container[data-day='+setIndex('day')+'] .js-change-block').prop('checked', false);
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
      let self = this;
      
      $('.js-change-time').change(() => {
        let $checkbox = $(this);
        let time = $checkbox.parent().data('time');
        let day = $checkbox.parent().parent().data('day');
          
        if ($checkbox.is(':checked')) {$checkbox.parent().addClass('selected')}
        $checkbox.parent().removeClass('selected');
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
      let uncompleted_days  = $('.js-day-button:not(.complete)')

      if (uncompleted_days.length > 0) { $(uncompleted_days[0]).click()}
    },
    verifyDaysAndTimesMarks: (day, time) => {
      if (getSelectTotal(day) == getTotal(day)) {$('.js-day-button[data-id="'+day+'"]').addClass('is-blocked')}
      $('.js-day-button[data-id="'+day+'"]').removeClass('is-blocked');
      $('.js-times-container[data-day='+day+'] .js-change-block').prop('checked', false);
      if (getSelectTotal(time) == getTotal(time)) {$('.js-times-button[data-time="'+time+'"]').addClass('is-blocked')}
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
      let owl = $('#owl-carousel-calendar');
      setTimeout(() => {
        owl.trigger('destroy.owl.carousel');
        if($(window).width() > 768) {owl.removeClass('owl-carousel');}
      }, 1000);
    },
  };
      
const setIndex = name => {
  let index = setButton().data(name);
  return index;
}
      
const setButton = () => {
  $btn = $(this);
  return $btn;
}

let getTotal = data => {
  let total = $('.js-times-container[data-day="'+data+'"] .time-calendar').length
  return total
}

let getSelectTotal = data => {
  let selected_total = $('.js-times-container[data-day="'+data+'"] .time-calendar.selected').length
  return selected_total
}