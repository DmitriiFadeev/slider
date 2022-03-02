<template>
  <div style="margin-top: 20px">
    <Slider />
    <Form style="margin-top: 20px" />
    <Modal />
  </div>
</template>

<script>

import Slider from '@/components/Slider'
import Form from '@/components/Form'
import Modal from '@/components/Modal'

export default {
  name: 'IndexPage',
  components: {
    Slider, Form, Modal
  }
}
</script>
