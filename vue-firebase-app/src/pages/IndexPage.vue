<template>
    <div class="section is-full-height" :style="{'background-color': authColor}">
    	<div class="container">
            <div class="columns">
                <div class="column is-6 is-offset-3">    
                    
                    <!-- content -->
                    <p class="content">
                        <div class="image">
                            <img src="../assets/logo.png" alt=""><br>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <br>
                    
                    <!-- simple v-if for authenticated user -->
                    <div class="is-text-centered" v-if="!authenticated">
                        <h1 class="title">Login</h1>
                        <router-link :to="{path: '/login'}" class="button">Sign in with Goolge</router-link>
                    </div>
                    <div class="is-text-centered" v-if="authenticated">
                        <div class="is-margin-centered image is-96x96 profile-image">
                            <img :src="authProfile.photoURL" alt="">
                        </div>
                        <h1 class="title">{{authProfile.displayName}}</h1>
                        <h1 class="subtitle is-6">{{authProfile.email}}</h1>
                        <h1 class="subtitle is-6">
                            <span class="icon">
                                <i class="fa fa-github"></i>
                            </span>
                            <span>{{authProfile.github}}</span>
                        </h1>
                        <router-link :to="{path: '/logout'}" class="is-link">logout</router-link><br>
                        <a class="button is-small edit-button" @click="toggleEditModal">edit</a>
                    </div>
                    
                    <!-- a modal component -->
                    <modal v-if="authProfile" :show="showEditModal" @close="() => {showEditModal = false}">
                        <div class="box">
                            <h1 class="title is-text-centered">{{authProfile.displayName}}</h1>
                            <br>
                            <div class="field">
                                <p class="control">
                                    <label class="label">Github Name</label>
                                    <input class="input" type="text" name="" v-model="authProfile.github" placeholder="@omi-ideo">
                                </p>
                            </div>

                            <div class="field">
                                <p class="control">
                                    <label class="label">Favorite Color</label>
                                    <input class="input" type="text" name="" v-model="authProfile.color" placeholder="#ff00ff">
                                </p>
                            </div>

                            <div class="field is-grouped">
                                <p class="control">
                                    <button class="button is-primary" @click="save">Save</button>
                                </p>
                                <p class="control">
                                    <button class="button" @click="() => {this.showEditModal = false}">Cancel</button>
                                </p>
                            </div>
                            
                        </div>  
                    </modal>

                </div>
            </div>   
        </div>
    </div>   
</template>

<script>
export default {
    name: 'IndexPage',
    props: {},
    data() {
        return {
            showEditModal: false
        }
    },
    components: {
    },
    methods: {
        toggleEditModal() {
            this.showEditModal = !this.showEditModal
        },
        save() {
            if (this.authProfile) {
                this.$db.ref(`users/${this.authProfile.uid}`).update({
                    github: this.parseValue(this.authProfile.github),
                    color: this.parseValue(this.authProfile.color)
                }).then(() => {
                    this.showEditModal = false
                })
            }
        }
    },
    computed: {
        authColor() {
            if (!this.authProfile) {
                return '#EEEEEE';
            } else if (this.authProfile && !this.authProfile.color) {
                return '#EEEEEE';
            }
            return this.authProfile.color
        }
    },
    watch: {
    },
    created() {
    },
    mounted() {
    }
}
</script>

<style scoped lang="scss">
.edit-button {
    margin-top: 30px;
}
</style>