import Vue from 'vue'

Vue.filter('phone', function (phone) {
  if (!phone) {
    return '';
  } else {
    return phone.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 ($1) $2-$3-$4');
  }
});

Vue.filter('phoneHref', function (phone) {
  if (!phone) {
    return '';
  } else {
    return `tel:+7${phone}`;
  }
});
