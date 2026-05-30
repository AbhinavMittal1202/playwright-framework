import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

export const users = {
    validUser:{
        username: process.env.ADMIN_USERNAME || '',
        password: process.env.ADMIN_PASSWORD || ''
    },
    invalidUser:{
        username: 'Abhinav',
        password: 'invalidpassword'
    }
}