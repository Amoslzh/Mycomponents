import asTest from './as-test'
import asCard from './as-card'

const components = [
    asTest,
    asCard
]

const install = Vue => {
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}

export default install