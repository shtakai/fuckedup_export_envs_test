const udon = () => { console.log('udon') }
const soba = () => { console.log('soba') }

if (process.env.NODE_ENV === 'test') {
  module.exports = { udon, soba }
} else {
  module.exports = { udon }
}
