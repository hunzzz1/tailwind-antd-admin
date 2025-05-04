<script setup>

</script>

<template>
  <!-- 统计卡片组（示例） -->
  <section class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
    <div class="p-4 bg-white rounded-lg shadow-sm">
      <div class="text-sm text-gray-500">Total Revenue</div>
      <div class="mt-2 text-2xl font-semibold">—</div>
      <div class="text-xs text-green-600 mt-1">—</div>
    </div>
    <div class="p-4 bg-white rounded-lg shadow-sm">
      <div class="text-sm text-gray-500">Subscriptions</div>
      <div class="mt-2 text-2xl font-semibold">—</div>
      <div class="text-xs text-green-600 mt-1">—</div>
    </div>
    <div class="p-4 bg-white rounded-lg shadow-sm">
      <div class="text-sm text-gray-500">Sales</div>
      <div class="mt-2 text-2xl font-semibold">—</div>
      <div class="text-xs text-green-600 mt-1">—</div>
    </div>
    <div class="p-4 bg-white rounded-lg shadow-sm">
      <div class="text-sm text-gray-500">Active Now</div>
      <div class="mt-2 text-2xl font-semibold">—</div>
      <div class="text-xs text-green-600 mt-1">—</div>
    </div>
  </section>

  <!-- 主体区域（图表 + 列表） -->
  <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- 图表占位 -->
    <div class="col-span-2 p-4 bg-white rounded-lg shadow-sm h-80 flex items-center justify-center text-gray-400">
      Chart Placeholder
    </div>
    <!-- 列表占位 -->
    <div class="p-4 bg-white rounded-lg shadow-sm h-80 overflow-auto">
      <div class="text-sm font-medium mb-4">Recent Sales</div>
      <ul class="space-y-4">
        <li class="flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">AB</div>
            <div>
              <div class="font-medium">Name</div>
              <div class="text-xs text-gray-500">@email</div>
            </div>
          </div>
          <div class="text-sm font-semibold">+$—</div>
        </li>
        <!-- ... -->
      </ul>
    </div>
  </section>

</template>

<style scoped>

</style>