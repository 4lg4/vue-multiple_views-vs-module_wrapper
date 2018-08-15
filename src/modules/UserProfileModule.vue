<template>
    <div class="us">
    <h2>User Settings</h2>
    <UserSettingsNav/>
    <UserProfile/>
    <UserProfilePreview/>
    </div>
</template>

<script>
import UserSettingsNav from '@/components/UserSettingsNav2.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserProfilePreview from '@/components/UserProfilePreview.vue'

export default {
  name: 'UserSettingsModule',
  components: {UserSettingsNav, UserProfile, UserProfilePreview}
}
</script>