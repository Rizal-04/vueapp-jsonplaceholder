<template>
    <div    
     style="display:flex;justify-content:center;align-items:center;flex-direction:column"
>
        <div v-for="photosItem in photos" :key="photosItem.id" style="margin:15px 0px 15px 0px; width:50%;">
            <div v-if="isShowSkeleton === true" class="media-content">
        <div class="content">
          <p>
            <b-skeleton active height="25px"></b-skeleton>
            <b-skeleton height="150px"></b-skeleton>
            <b-skeleton height="40px"></b-skeleton>
          </p>
        </div>
      </div>
        <div v-if="isShowSkeleton === false" class="card">
            <div class="card-content">
                <div class="content">
                    <h1>{{photosItem.title}}</h1>
                </div>
                  <div class="card-image">
          <figure class="image is-4by3">
            <img :src="photosItem.url" alt="" />
          </figure>
        </div>
             <h1>{{photosItem.thumbnailUrl}}</h1>
            </div>
            </div>
        </div>
    </div>
</template>
<script src="./script.js">
