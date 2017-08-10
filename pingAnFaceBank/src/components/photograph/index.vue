<template>
    <div :class="['photograph-wrapper', photoState]">

      <div :class="identification?'photograph-img-wrapper':'photograph-img-other-wrapper'"
           :style="{'background-image':backgroundImage}"
           @click="openCamera">
        <img class="photograph-img"  :src="src">
        <i class="icon-camera photograph-icon"></i>
        <div class="photograph-progress-box">
            <div v-show="'PHOTO_UPLOADING'==showState"
                 class="photograph-progress-content"
                 :style="progressStyle"
                 @transitionEnd="uploadFinish"
                 @webkitTransitionEnd="uploadFinish"
            ></div>
        </div>
      </div>
      <span class="photograph-text">
        <slot></slot>
      </span>

    </div>
</template>
<script>
    import './style';
    export { default }  from './main';
</script>
