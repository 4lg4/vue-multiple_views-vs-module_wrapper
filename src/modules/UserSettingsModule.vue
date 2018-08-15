<template>
    <div class="us">
    <h2>User Settings</h2>
    <UserSettingsNav/>
    </div>
</template>

<script>
import UserSettingsNav from '@/components/UserSettingsNav2.vue'

export default {
  name: 'UserSettingsModule',
  components: {UserSettingsNav}
}
</script>