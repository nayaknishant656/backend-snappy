import 'dotenv/config';
import mongoose from 'mongoose';
import postgres from 'postgres';

export const sql = postgres({
  host: process.env.PGHOST || '127.0.0.1',
  port: Number(process.env.PGPORT || 5432),
  database: process.env.PGDATABASE || 'postgres',
  user: process.env.PGUSER || 'postgres',
  username: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || '',
  connect_timeout: 10,
});

const connectDB = async () => {
  try {
    console.log('⏳ Connecting to MongoDB...');
    const conn = await mongoose.connect(
      process.env.MONGODB_URI ||
      'mongodb+srv://mobideas2:nishantnayak2297@cluster0.05pqoma.mongodb.net/SnappyPoornima',
      { serverSelectionTimeoutMS: 10000, family: 4 }
    );
    console.log(`🍃 MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB Error: ${err.message}`);
    process.exit(1);
  }

  try {
    console.log('⏳ Connecting to PostgreSQL...');
    await sql`SELECT 1`;
    console.log(`🐘 PostgreSQL Connected: ${process.env.PGUSER || 'postgres'}@${process.env.PGHOST || '127.0.0.1'}:${process.env.PGPORT || 5432}/${process.env.PGDATABASE || 'postgres'}`);
  } catch (err) {
    console.error(`❌ PostgreSQL Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
