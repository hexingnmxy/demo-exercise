<template>

  <pa-layout-auto-content>

    <pa-return slot="header"
               navigationTitle="拍摄资料"
               :link-address="linkPrevious">
    </pa-return>

    <div class="ui-page-box">

      <div class="take-photos-wrapper ui-page-green">
        <div class="take-photos-title">
          <pa-title text-color="gray">请在相应区域点击并拍摄您的证件</pa-title>
        </div>

        <div class="take-photos-top-content">
          <div class="take-photos-identification"
               v-for="(item,index) in identification">
            <pa-photograph :background-image="item.backgroundImage"
                           :src="item.src"
                           :show-state="item.state"
                           :upload-progress="item.uploadProgress"
                           :open-camera='function() {
                           openCamera( item );
                           }'
                           :upload-finish='function() {
                           uploadFinish( item );
                           }'
                           identification="true"
            >
              {{item.text}}
            </pa-photograph>
          </div>

        </div>
      </div>

      <div class="take-photos-other-wrapper ui-page-green">

        <div class="take-photos-title">
          <pa-title text-color="gray">拍摄辅助资料</pa-title>
        </div>

        <div class="take-photos-bottom-content">
          <div class="take-photos-other" v-for="(item, index) in otherMaterial">
            <pa-photograph
             :src="item.src"
             :show-state="item.state"
             :upload-progress="item.uploadProgress"
             :open-camera='function() {
             openCamera( item );
             }'
             :upload-finish='function() {
             uploadFinish( item );
             }'
            >
              辅助资料{{index + 1}}
            </pa-photograph>
          </div>
          <div class="take-photos-other">
            <pa-photograph :open-camera='addOtherMaterial'>
              辅助资料{{otherMaterial.length + 1}}
            </pa-photograph>
          </div>
        </div>

      </div>

    </div>

  <pa-bottom-button position-type="fixed" :btn-list="bottomBtn" :item-click="saveInfo"></pa-bottom-button>

  </pa-layout-auto-content>

</template>
<script>
  import main from './main';
  import './style';
  export default main;
</script>
