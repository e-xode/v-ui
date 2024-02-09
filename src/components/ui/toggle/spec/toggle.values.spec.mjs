import { mount, flushPromises } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Toggle from '../toggle.vue'

describe('components/ui/Toggle.vue (values)', () => {

    const propsData = {
        modelValue: 'foo',
        checkedValue: 'foo',
        uncheckedValue: 'bar'
    }

    const mountComponent = () => {
        return mount(Toggle, {
            ...setup,
            propsData
        })
    }

    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
        jest.useRealTimers()
    })

    it('Should render', async() => {
        const component = mountComponent()

        await flushPromises()

        expect(component.vm.toggled).toBe('foo')
        expect(component.vm.isChecked).toBeTruthy()
    })

    it('Should not toggle', async() => {
        const component = mountComponent()

        component.vm.onToggle()

        const emitted = component.emitted()
        expect(emitted['update:modelValue'][0]).toEqual(['bar'])

        expect(component.vm.toggled).toBe('bar')
        expect(component.vm.isChecked).toBeFalsy()
    })

    describe('disabled', () => {

        beforeEach(() => {
            propsData.disabled = true
        })

        it('Should not onToggle', () => {
            const component = mountComponent()

            component.vm.onToggle()

            const emitted = component.emitted()
            expect(emitted['update:modelValue']).toBeFalsy()

            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.isChecked).toBeTruthy()
        })
    })
})
