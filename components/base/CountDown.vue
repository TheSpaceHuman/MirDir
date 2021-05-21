<template>
  <section class="count-down">
    <vue-countdown-timer
      :start-time="start"
      :end-time="end"
      :interval="1000"
      label-position="begin"
      day-txt=":"
      hour-txt=":"
      minutes-txt=":"
      seconds-txt="">
      <template slot="countdown" slot-scope="scope">
        <span class="">{{scope.props.days}}</span> <span>{{scope.props.dayTxt}}</span>
        <span>{{scope.props.hours}}</span> <span>{{scope.props.hourTxt}}</span>
        <span>{{scope.props.minutes}}</span> <span>{{scope.props.minutesTxt}}</span>
        <span>{{scope.props.seconds}}</span> <span>{{scope.props.secondsTxt}}</span>
      </template>
      <template slot="start-label" slot-scope="scope"><span>До начала тренинга</span></template>
      <template slot="end-label" slot-scope="scope"></template>
      <template slot="end-text" slot-scope="scope"><span>Тренинг начат</span></template>
    </vue-countdown-timer>
  </section>
</template>

<script>
export default {
  name: "CountDown",
  props: {
    end: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      start: '2020-01-01 00:00:00'
    }
  }
}
</script>

<style lang="scss">
  .count-down {
    padding: 40px;
    span {
      color: #fff;
      font-size: 21px;
    }
  }
</style>
