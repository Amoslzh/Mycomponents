import asTest from './as-test'
import asCard from './as-card'
import asSelect from './as-select'

const components = [
    asTest,
    asCard,
    asSelect
]

const install = Vue => {
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}

export default install