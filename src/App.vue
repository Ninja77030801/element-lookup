<template>
  <h1 style="text-align: center; margin-top: 56px;" class="title">Element Lookup</h1>
  <p style="text-align: center;">Search by: <select v-model="lookupMethod" class="select">
    <option selected value="name">Name</option>
    <option value="symbol">Symbol</option>
    <option value="number">Number</option>
  </select></p><br />
  <div v-if="lookupMethod" style="text-align: center;">
    <input style="margin-left: auto; margin-right: auto" v-if="lookupMethod == 'name'" class="input custom-width" type="text" placeholder="Search by name" v-model="wantedElementInfo" @keyup.enter="LookupElement">
    <input style="margin-left: auto; margin-right: auto" v-if="lookupMethod == 'symbol'" class="input custom-width" placeholder="Search by symbol" v-model="wantedElementInfo" @keyup.enter="LookupElement" type="text">
    <input style="margin-left: auto; margin-right: auto" v-if="lookupMethod == 'number'" class="input custom-width" placeholder="Search by atomic number" v-model="wantedElementInfo" @keyup.enter="LookupElement" type="text">
    <button style="margin-right: auto;" class="button is-primary" @click="LookupElement">Search</button>
  </div>
  <div style="margin-top: 30px;" v-if="searchComplete" class="el-info">
    <h1 class="title">{{ name }}</h1>
    Symbol: {{ symbol }}<br />
    Atomic number: {{ number }}<br />
    Atomic mass number: {{ mass }}<br />
    Appearance: {{ appearance || "Not given" }}<br />
    Discovered by {{ discoveredBy }}
  </div>
  <div style="margin-top: 40%;">
    <a style="margin-left: 80%" href="https://ninja77030801.netlify.app" target="_blank"><button class="button is-link">About the developer</button></a>
  </div>
</template>
<script>
import * as npt from 'node-periodic-table'
import { analytics } from "./firebase"
import { logEvent } from "firebase/analytics"
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
      searchComplete: false,
    }
  },
  methods: {
    LookupElement(){
      try {
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
      catch(error){
        alert(error)
      }
      finally {
        logEvent(analytics, "search_element", { wantedElement: this.wantedElementInfo })
      }
    }
  },
  mounted(){
    logEvent(analytics, 'page_view')
  }
}
</script>

<style>
.custom-width {
  width: 50%;
}

.el-info {
  text-align: center;
  justify-content: center;
}
</style>
