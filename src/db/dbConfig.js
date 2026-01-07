import mongoose from "mongoose";
export async function Connect(connectionurl){
    try {
        if(!connectionurl){
            console.log('Connectionurl is missing...')
        }
        await mongoose.connect(connectionurl);
        const connection = mongoose.connection;

        connection.on('connect',()=>{
            console.log('Connected to database')
        })
        connection.on('error',(error)=>{
            console.log('Could not connect to database'+error);
            process.exit()
        })

    } catch (error) {
        console.log('Error while connecting to database')
    }
}