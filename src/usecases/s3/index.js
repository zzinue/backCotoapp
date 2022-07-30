const aws = require('aws-sdk');
const config = require("../../lib/config");
const crypto = require("crypto");
const {promisify} = require ("util");
const randomBytes = promisify(crypto.randomBytes)

const region = "us-west-2"
const bucketName = "cotoapp"
const accessKeyId = config.aws.accessKeyId;
const secretAccessKey = config.aws.secretAccessKey;

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

const generateUploadURL = async () => {
    const rawBytes = await randomBytes(16)
    const imageName = rawBytes.toString('hex');

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}

module.exports = {
    generateUploadURL
};