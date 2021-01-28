const crypto = require('crypto');
const {v4: UUUIv4} = require('uuid');
const {hash} = require('bcryptjs');

const uuid = UUUIv4();
const md5 = crypto
                .createHash('md5')
                .update(uuid)
                .digest("hex");

hash(md5, 8)
    .then(responsehash => 
            console.log(`Hash generated: ${responsehash}`))

