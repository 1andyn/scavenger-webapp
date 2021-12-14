import mongoose from 'mongoose'

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectMongo