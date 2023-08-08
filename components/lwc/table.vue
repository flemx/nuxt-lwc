<script setup lang="ts">
//import '../../dist/main.js';

const columns = ref();

const data = ref();

onMounted(() => {
    data.value = generateData(10);
    columns.value = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
]
});

function generateData(amountOfRecords:number) {
    return [...Array(amountOfRecords)].map((_, index) => {
        return {
            name: `Name (${index})`,
            website: 'www.salesforce.com',
            amount: Math.floor(Math.random() * 100),
            phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
            closeAt: new Date(
                Date.now() + 86400000 * Math.ceil(Math.random() * 20)
            ),
        };
    });
}

</script>

<template>
    <h1>Lightning Table</h1>
    <!-- <lightning-button label="dsdsds"></lightning-button>
    <lightning-datatable></lightning-datatable> -->
  <lightning-datatable
                key-field="id"
                :data="data"
                :columns="columns">
        </lightning-datatable>
</template>