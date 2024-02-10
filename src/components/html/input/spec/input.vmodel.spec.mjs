import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Input from '../input.vue'

describe('components/html/Input.vue (modelValue)', () => {
    const propsData = {
        placeholder: 'placeholder',
        modelValue: 'foo',
        type: 'text'
    }
    const mountComponent = () => {
        return mount(Input, {
            ...setup,
            propsData
        })
    }

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
    })

    it('Should render', () => {
        const component = mountComponent()

        expect(component.exists()).toBeTruthy()
        expect(component.vm.typed).toBe('foo')
        expect(component.vm.type).toBe(propsData.type)
        expect(component.vm.placeholderValue).toEqual(propsData.placeholder)
    })

    it('Should update from prop', async() => {
        const component = mountComponent()

        component.setProps({ value: 'bar' })
        await component.vm.$nextTick()

        expect(component.vm.typed).toBe('bar')
    })

    it('Should emit on modelValue change', async() => {
        const component = mountComponent()

        component.vm.onChange('bar')
        await component.vm.$nextTick()

        const emitted = component.emitted()
        expect(emitted['update:modelValue'][0]).toEqual(['bar'])
    })

    it('Should emit on input change', async() => {
        const component = mountComponent()

        component.vm.onInput({ target: { value: 'bar' } })

        const emitted = component.emitted()
        expect(emitted['input'][0]).toEqual([{ target: { value: 'bar' }}])
        expect(emitted['update:modelValue'][0]).toEqual(['bar'])
        expect(component.vm.typed).toBe('bar')
    })
})
