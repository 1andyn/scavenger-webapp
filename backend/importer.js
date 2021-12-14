import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Import Data File


// Import Models

// Import Database Connections



dotenv.config()

const importData = async () => {



}


const destroyData = async () => {

}

if(process.argv[2] ==='-d') {
    destroyData()
} else {
    importData()
}