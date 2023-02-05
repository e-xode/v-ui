const props = {
    disabled: {
        type: Boolean
    },
    placeholder: {
        type: String,
        default: null
    },
    type: {
        type: String,
        required: true
    },
    modelValue: {
        types: [
            Boolean,
            String,
            Number,
            null
        ],
        required: false
    },
    value: {
        types: [
            Boolean,
            String,
            Number,
            null
        ],
        required: false
    }
}

export {
    props
}
