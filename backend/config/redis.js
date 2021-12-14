import { createClient } from 'redis'

const connectRedis = async () => {
    const client = createClient({ url: process.env.REDIS_DB })
    client.on('error', (err) => {
        console.log('Redis Client Error', err)
        process.exit(1)
    });
    await client.connect();
    console.log(`RedisDB Connected`)
    console.log(client)
}

export default connectRedis