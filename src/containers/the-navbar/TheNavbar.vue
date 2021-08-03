<template>
    <div>
        <b-navbar>
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                </b-navbar-item>
            </template>
            <template #start>
                <b-navbar-item @click="handleRouter('post')">
                    POST
                </b-navbar-item>
                <b-navbar-item @click="handleRouter('album')">
                    Albums
                </b-navbar-item>
                <b-navbar-item @click="handleRouter('photos')">
                    Photos
                </b-navbar-item>
                <b-navbar-item @click="handleRouter('todo')">
                    To Do
                </b-navbar-item>
                <b-navbar-item @click="handleRouter('users')">
                    User
                </b-navbar-item>
            </template>
       </b-navbar>
    </div>
</template>

<script src="./script.js">