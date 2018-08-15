<template>
    <div class="us">
    <h2>User Settings</h2>
    <UserSettingsNav/>
    <UserEmailsSubscriptions/>
    </div>
</template>

<script>
import UserSettingsNav from '@/components/UserSettingsNav2.vue'
import UserEmailsSubscriptions from '@/components/UserEmailsSubscriptions.vue'

export default {
  name: 'UserEmailsSubscriptionsModule',
  components: {UserSettingsNav, UserEmailsSubscriptions}
}
</script>