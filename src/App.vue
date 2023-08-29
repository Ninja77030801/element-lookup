<template>
  <h1>Element Lookup</h1>
  Search by: <select v-model="lookupMethod">
    <option selected value="name">Name</option>
    <option value="symbol">Symbol</option>
    <option value="number">Number</option>
  </select><br />
  <input v-if="lookupMethod == 'name'" type="text" placeholder="Search by name" v-model="wantedElementInfo" @keyup.enter="LookupElement">
  <input v-if="lookupMethod == 'symbol'" placeholder="Search by symbol" v-model="wantedElementInfo" @keyup.enter="LookupElement" type="text">
  <input v-if="lookupMethod == 'number'" placeholder="Search by atomic number" v-model="wantedElementInfo" @keyup.enter="LookupElement" type="text">
  <button @click="LookupElement">Search</button>
  <div v-if="searchComplete">
    <h1>{{ name }}</h1>
    Symbol: {{ symbol }}<br />
    Atomic number: {{ number }}<br />
    Atomic mass number: {{ mass }}<br />
    Appearance: {{ appearance || "Not given" }}<br />
    Discovered by {{ discoveredBy }}
  </div>
</template>
<script>
import * as npt from 'node-periodic-table'
export default {
  name: 'App',
  data(){
    return {
      lookupMethod: "",
      wantedElementInfo: "",
      name: "",
      number: "",
      appearance: "",
      mass: "",
      symbol: "",
      discoveredBy: "",
      searchComplete: false
    }
  },
  methods: {
    LookupElement(){
      var wantedElement
      switch(this.lookupMethod){
        case 'name':
          wantedElement = npt.getByName(this.wantedElementInfo)
          break
        case 'symbol':
          wantedElement = npt.getBySymbol(this.wantedElementInfo)
          break
        case 'number':
          wantedElement = npt.getByNumber(this.wantedElementInfo)
          break
      }
      this.name = wantedElement.name
      this.number = wantedElement.number
      this.appearance = wantedElement.appearance
      this.mass = wantedElement.atomic_mass
      this.symbol = wantedElement.symbol
      this.discoveredBy = wantedElement.discovered_by
      this.searchComplete = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
