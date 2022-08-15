/* eslint @typescript-eslint/no-var-requires: 0 */
// commonJS since wallaby is not capable of working with imports
// eslint-disable-next-line import/no-extraneous-dependencies
const Enzyme = require('enzyme')
// eslint-disable-next-line import/no-extraneous-dependencies
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')

Enzyme.configure({ adapter: new Adapter() })
