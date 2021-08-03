<template>
  <div class="container">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <b-carousel
            :autoplay="false"
            with-carousel-list
            :indicator="false"
            :overlay="gallery"
            @click="switchGallery(true)"
          >
            <b-carousel-item v-for="(item, i) in items" :key="i">
              <figure class="image">
                <img :src="item.image" />
              </figure>
            </b-carousel-item>
            <span
              v-if="gallery"
              @click="switchGallery(false)"
              class="modal-close is-large"
            />
            <template #list="props">
              <b-carousel-list
                v-model="props.active"
                :data="items"
                v-bind="al"
                @switch="props.switch($event, false)"
                as-indicator
              />
            </template>
            <template #overlay>
              <div class="has-text-centered has-text-white">
                Hello i'am overlay!
              </div>
            </template>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./script.js" />
