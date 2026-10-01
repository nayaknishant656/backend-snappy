// import postgres from 'postgres';
import mongoose from 'mongoose';

// const pgHost = process.env.PGHOST || process.env.DB_HOST || '127.0.0.1';
// const pgPort = Number(process.env.PGPORT || process.env.DB_PORT || 5432);
// const pgDatabase = process.env.PGDATABASE || process.env.DB_NAME || 'postgres';
// const pgUser = process.env.PGUSER || process.env.DB_USER || 'postgres';
// const pgPassword = process.env.PGPASSWORD || process.env.DB_PASSWORD || '';

// export const sql = postgres({
//   host: pgHost,
//   port: pgPort,
//   database: pgDatabase,
//   username: pgUser,
//   password: pgPassword,
// });

// let isPgConnected = false;
// let isMongoConnected = false;

// const connectDB = async () => {
//   // if (!isPgConnected) {
//   //   try {
//   //     await sql`SELECT 1`;
//   //     isPgConnected = true;
//   //     console.log(`PostgreSQL Connected: ${pgUser}@${pgHost}:${pgPort}/${pgDatabase}`);
//   //   } catch (error) {
//   //     console.error(`PostgreSQL Connection Error: ${error.message}`);
//   //   }
//   // }

//   if (!isMongoConnected && mongoose.connection.readyState < 1) {
//     try {
//       const mongoUri =
//         process.env.MONGODB_URI ||
//         'mongodb+srv://mobideas2:nishantnayak2297@cluster0.05pqoma.mongodb.net/SnappyPoornima';

//       const conn = await mongoose.connect(mongoUri);
//       isMongoConnected = true;
//       console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//       console.error(`MongoDB Connection Error: ${error.message}`);
//     }
//   }
// };



const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://mobideas2:nishantnayak2297@cluster0.05pqoma.mongodb.net/SnappyPoornima';

    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000, // fail fast after 10s instead of hanging
    });
    console.log(`🚀 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};



export default connectDB;

