const ArrayInterface = require('./interfaces/ArrayInterface')

class ProducsRepository extends ArrayInterface {
    constructor() {
        super()
    }
}

module.exports = new ProducsRepository()