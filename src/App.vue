<template>
  <h1>Element Lookup</h1>
  <input type="text" v-model="wantedElementName" @keyup.enter="LookupElement"><button @click="LookupElement">Search</button>
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
      wantedElementName: "",
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
      var wantedElement = npt.getByName(this.wantedElementName)
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
