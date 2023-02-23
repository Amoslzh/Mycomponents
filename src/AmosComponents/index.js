import asTest from './as-test'
import asCard from './as-card'
import asSelect from './as-select'
import asSnow from './as-snow'

const components = [
    asTest,
    asCard,
    asSelect,
    asSnow
]

const install = Vue => {
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}

export default install