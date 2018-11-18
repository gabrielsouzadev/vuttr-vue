import { mount } from '@vue/test-utils'
import { Store } from 'vuex-mock-store'
import ToolsList from '@/components/Tools/ToolsList.vue'
import i18n from '@/lang'

// Store mock
const store = new Store({
    state: {
        tools: []
    },
    getters: {
        'tools/tools': [{
            "id": 1,
            "title": "Notion",
            "link": "https://notion.so",
            "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
            "tags": [
                "organization",
                "planning",
                "collaboration",
                "writing",
                "calendar"
            ]
        },{
			"id": 2,
			"title": "json-server",
			"link": "https://github.com/typicode/json-server",
			"description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
			"tags": [
				"api",
				"json",
				"schema",
				"node",
				"github",
				"rest"
			]
		}]
    }
})

const mocks = {
    $store: store
}

// Limpar states
afterEach(() => store.reset())

describe('ToolsList Component', () => {

    it('Filtrar ferramentas por título', () => {

        const wrapper = mount(ToolsList, { mocks, i18n })

        expect(wrapper.vm.q).toBe(null)
        expect(wrapper.vm.tags).toBe(null)

        wrapper.find('input').setValue('Notion')
        wrapper.find('input').trigger('input')

        expect(wrapper.vm.q).toBe('Notion')
    })

    it('Filtrar ferramentas por tags', () => {

        const wrapper = mount(ToolsList, {
             mocks,
             i18n,
             propsData: {
                 q: 'collaboration',
                 tags: true
             }
         })

         expect(wrapper.find('.tools-list-item__title').text()).toBe('Notion')
    })
})
