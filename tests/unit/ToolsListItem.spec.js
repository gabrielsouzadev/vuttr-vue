import { mount } from '@vue/test-utils'
import ToolsListItem from '@/components/Tools/ToolsListItem.vue'
import i18n from '@/lang'

let mock = {
    id: 1,
    title: 'Notion',
    link: 'https://notion.so',
    description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
    tags: [
        'organization',
        'planning',
        'collaboration',
        'writing',
        'calendar'
    ]
}

describe('ToolsListItem Component', () => {

    it('Renderizar o objeto tool', () => {
        const wrapper = mount(ToolsListItem, {
            i18n,
            propsData: {
                tool: mock
            }
        })

        let title = wrapper.find('.tools-list-item__title').text()
        let description = wrapper.find('.tools-list-item__description').text()
        let tags = wrapper.find('.tools-list-item__tags b').text()

        expect(title).toBe('Notion')
        expect(description).toBe('All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.')
        expect(tags).toBe('#organization')
    })
})
