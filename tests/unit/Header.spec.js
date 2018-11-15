import { mount } from '@vue/test-utils'
import Header from '@/components/Header/Header.vue'

describe('Header Component', () => {
    it('Renderiza titulo e subtitulo da pagina', () => {
        let title = 'Título'
        let subtitle = 'Subtítulo'

        const wrapper = mount(Header, {
            propsData: {
                title: title,
                subtitle: subtitle
            }
        })

        expect(wrapper.props('title')).toBe(title)
        expect(wrapper.props('subtitle')).toBe(subtitle)
    })
})
