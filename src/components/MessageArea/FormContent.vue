<template>
  <div class="form-content-container" ref="form">
    <form @submit.prevent="handleClick">
      <div class="form-item">
        <div class="nickname">
          <input
            type="text"
            maxlength="10"
            v-model="formData.nickName"
            placeholder="用户昵称"
          />
          <span>{{ formData.nickName.length }}/10</span>
        </div>
        <div class="error">{{ formData.nickName.length > 0 ? '' : error.nickName }}</div>
      </div>
      <div class="form-item">
        <div class="content">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="输入内容"
            v-model="formData.content"
          ></textarea>
          <span>{{ formData.content.length }}/300</span>
        </div>
        <div class="error">{{ formData.content.length > 0 ? '' : error.content }}</div>
      </div>
      <div class="form-item">
        <button
          :disabled="isSubmiting"
        >
          提交{{isSubmiting ? '中...' : ''}}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickName: "",
        content: "",
      },
      error: {
        nickName: "",
        content: "",
      },
      isSubmiting: false,
    };
  },
  methods: {
    handleClick() {
      this.error.nickName = !this.formData.nickName ? "请输入昵称" : "";
      this.error.content = !this.formData.content ? "请输入评论内容" : "";
      if (this.error.nickName || this.error.content) {
        return;
      }
      this.isSubmiting = true;
      this.$emit("submit", {...this.formData, ...this.error}, (successMsg)=>{
        this.$showMessage({
          content: successMsg,
          type: 'success',
          container: this.$refs.form, 
          callback: ()=>{
            this.formData.nickName = '';
            this.formData.content = '';
            this.isSubmiting = false;
          }
        })
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.form-content-container {
  .form-item {
    margin-bottom: 8px;
    .error {
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      color: @danger;
      margin-top: 6px;
    }
    span {
      position: absolute;
      right: 6px;
      bottom: 8px;
      color: @gray;
      font-size: 12px;
    }
    button {
      width: 100px;
      height: 34px;
      padding: 1px 6px;
      color: #fff;
      background-color: @primary;
      border-radius: 4px;
      outline: none;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: darken(@primary, 10%);
      }
      &:disabled {
        cursor: not-allowed;
        background-color: lighten(@primary, 10%);
      }
    }
  }
  .nickname {
    width: 50%;
    height: 40px;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      padding: 0 15px;
      border: 1px dashed;
      box-sizing: border-box;
      outline: none;
      &:focus {
        border-color: @primary;
      }
    }
  }
  .content {
    position: relative;
    textarea {
      resize: none;
      width: 100%;
      height: 120px;
      border: 1px dashed;
      outline: none;
      padding: 8px 15px;
      box-sizing: border-box;
      &:focus {
        border-color: @primary;
      }
    }
  }
}
</style>