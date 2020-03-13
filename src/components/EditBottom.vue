<template>
  <div class="edit-bottom w_max flex flex_right">
    <div class="btn_group flex">
      <div v-if="id" @click="save" class="button btn btn_big btn_warning">Сохранить</div>
      <div v-if="!id" @click="add" class="button btn btn_big btn_warning">Добавить</div>
      <div v-if="id" @click="deleteModalOpen" class="button btn btn_big btn_dark">Удалить</div>
      <div @click="cancelModalOpen" class="button btn btn_big btn_dark">Отменить</div>
    </div>
    <BaseModal @close="cancelModalOpen" :show="cancelModal">
      <BaseWarning
        :message="cancelMessage"
        @cancel="cancelModalOpen"
        @confirm="cancel"
      />
    </BaseModal>
    <BaseModal @close="deleteModalOpen" :show="deleteModal">
      <BaseWarning
        :message="deleteMessage"
        @cancel="deleteModalOpen"
        @confirm="remove"
      />
    </BaseModal>
  </div>
</template>

<script>
import BaseModal from '@/components/BaseModal'
import BaseWarning from '@/components/BaseWarning'
export default {
  props: {
    id: String
  },
  components: {
    BaseModal,
    BaseWarning
  },
  data () {
    return {
      cancelMessage: 'Вы уверены что хотите покинуть эту страницу ?',
      cancelModal: false,
      deleteMessage: 'Вы уверены что хотите удалить заметку ?',
      deleteModal: false
    }
  },
  methods: {
    save () {
      this.$emit('save', true)
    },
    add () {
      this.$emit('add', true)
    },
    remove () {
      this.deleteModalOpen()
      this.$emit('remove', true)
    },
    cancel () {
      this.cancelModalOpen()
      this.$emit('cancel', true)
    },
    cancelModalOpen () {
      this.cancelModal = !this.cancelModal
    },
    deleteModalOpen () {
      this.deleteModal = !this.deleteModal
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
