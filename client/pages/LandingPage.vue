<template>
  <div>
    <p>Vue app in meteor</p>
    <router-link :to="{ name: 'aboutPage' }">About us</router-link>

    <hr>

    <div v-if="!$subReady.Time">Loading...</div>
    <div v-else>
      <p>Hello {{hello}},
        <br>The time is now: {{currentTime}}
      </p>
      <button @click="updateTime">Update Time</button>
      <p>Startup times:</p>
      <ul>
        <li v-for="t in TimeCursor">
          {{t.time}}  -  {{t._id}}
        </li>
      </ul>
      <p>Meteor settings</p>
      <pre><code>
        {{settings}}
      </code></pre>
    </div>
  </div>
</template>

<script type="text/javascript">
  import '/imports/collections/Time.js'

  export default {
    data() {
      return {
        hello: "World",
        settings: Meteor.settings.public
      }
    },

    methods: {
      updateTime() {
        console.log('Calling Meteor Method UpdateTime');
        Meteor.call('UpdateTime');          // not Meteor reactive
      }
    },

    meteor: {
      // Subscriptions - Errors not reported spelling and capitalization.
      $subscribe: {
        'Time': []
      },

      // A helper function to get the current time
      currentTime () {
        console.log('Calculating currentTime');
        var t = Time.findOne('currentTime') || {};
        return t.time;
      },

      // A Minimongo cursor on the Time collection is added to the Vue instance
      TimeCursor () {
        // Here you can use Meteor reactive sources like cursors or reactive vars
        // as you would in a Blaze template helper
        return Time.find({}, {
          sort: { time: -1 }
        })
      },
    }
  }
</script>