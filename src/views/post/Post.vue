<template>
  <div
    style="display:flex;justify-content:center;align-items:center;flex-direction:column"
  >
    <b-button type="is-primary" @click="statusModal = true" style="width:50%;"
      >Tambah postingan</b-button
    >
    <section>
      <b-modal :width="400" v-model="statusModal">
        <section class="modal-card-body" style="text-align:left;">
          <b-field label="User Id">
            <b-input
              v-model="dataForm.userId"
              type="text"
              placeholder="your user id"
            >
            </b-input>
          </b-field>
          <b-field label="Title">
            <b-input
              v-model="dataForm.title"
              type="text"
              placeholder="Tulis ststus Title"
            >
            </b-input>
          </b-field>

          <b-field label="Body">
            <b-input
              v-model="dataForm.body"
              type="textarea"
              placeholder="Tulis status Body"
            >
            </b-input>
          </b-field>

          <footer class="modal-card-medium">
            <b-button
              :loading="isLoading"
              type="is-primary"
              @click="handlePost()"
              >Post</b-button
            >
          </footer>
        </section>
      </b-modal>
      <b-modal
        :on-cancel="handleClearDataComment"
        :width="400"
        v-model="isShowComment"
      >
        <section class="modal-card-body" style="text-align:left;">
          <div
            class="card"
            style="margin:20px 0px 20px 0px;padding:10px"
            v-for="comentItem in coments"
            :key="comentItem.id"
          >
            <p class="title is-6">{{ comentItem.email }}</p>
            <p>{{ comentItem.body }}</p>
          </div>
          <footer class="modal-card-medium">
            <b-button
              :loading="isLoading"
              type="is-primary"
              @click="isShowComment = false"
              >Cancel</b-button
            >
          </footer>
        </section>
      </b-modal>
    </section>

    <div
      v-for="item in table"
      :key="item.id"
      style="margin:15px 0px 15px 0px; width:50%;"
    >
      <div v-if="isShowSkeleton === true" class="media-content">
        <div class="content">
          <p>
            <b-skeleton height="150px"></b-skeleton>
            <b-skeleton active height="25px"></b-skeleton>
            <b-skeleton height="40px"></b-skeleton>
          </p>
        </div>
      </div>
      <div v-if="isShowSkeleton === false" class="card" style="padding:20px">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://wallpapercave.com/wp/wp2474665.jpg" alt="" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://media.miluv.app/v7/_satukancinta_/prd/person/profile/cari-jodoh-wanita-fannyhad-372.jpg?func=face&w=200&h=200"
                  alt=""
                />
              </figure>
            </div>
            <div class="media-content">
              <h2 class="title is-4">
                {{ item.title }}
              </h2>
            </div>
          </div>
          <div class="content" style="text-align:left;">
            <p>{{ item.body }}</p>
          </div>
          <div class="columns is-gapless">
            <div class="column"></div>
            <div class="column"></div>
            <b-button
              label="Lihat Komentar"
              type="is-primary"
              :loading="isLoading"
              @click="handleShowComment(item.id)"
            ></b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./script.js" />
