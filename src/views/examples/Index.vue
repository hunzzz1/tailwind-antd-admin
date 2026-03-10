<script setup>
import { ref,shallowRef } from 'vue'

const value = ref()
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]
const options = [
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'Yiminghe',
    label: 'yiminghe',
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
]
const value1 = shallowRef('lucy')
const date = shallowRef()
</script>

<template>
  <a-card >
    <a-space>
      <a-input v-model:value="value"   placeholder="Basic usage" />
      <a-input v-model:value="value"   placeholder="Basic usage" />
      <a-select v-model:value="value1" style="width: 120px" :options="options" />
      <a-range-picker v-model:value="date" />
      <a-button type="primary">
        Primary Button
      </a-button>
    </a-space>
    <br><br>
    <a-table :data-source="dataSource" :columns="columns" />
  </a-card>
</template>

<style scoped>

</style>