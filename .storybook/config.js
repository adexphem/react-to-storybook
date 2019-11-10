import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

addDecorator(withInfo({
    header: true
}))

const req = require.context('../src', true, /\.stories\.js$/)
function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)