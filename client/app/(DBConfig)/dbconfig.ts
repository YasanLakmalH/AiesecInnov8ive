import mongoose from 'mongoose'

export async function connect(){
    console.log('MONGODB_URI:', process.env.MONGODB_URI);

    try{
        const mongoUri = process.env.MONGODB_URI;

        if (!mongoUri) {
            throw new Error('MongoDB connection URI is not defined in environment variables');
        }

        await mongoose.connect(mongoUri)

        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('MongoDB connected');
        })

        connection.on('error',(err)=>{
            console.log('MongoDB connection error',err);
            process.exit();
        })
    }catch(err){
        console.log(err)
    }
}