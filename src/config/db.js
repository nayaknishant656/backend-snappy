import mongoose from 'mongoose';
import postgres from 'postgres';

export const sql = postgres({
  host: process.env.PGHOST || '127.0.0.1',
  port: Number(process.env.PGPORT || 5432),
  database: process.env.PGDATABASE || 'snappy_db',
  username: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || '',
});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI ||
      'mongodb+srv://mobideas2:nishantnayak2297@cluster0.05pqoma.mongodb.net/SnappyPoornima',
      { serverSelectionTimeoutMS: 10000 }
    );
    console.log(`🍃 MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB Error: ${err.message}`);
    process.exit(1);
  }

  try {
    await sql`SELECT 1`;
    console.log(`🐘 PostgreSQL Connected: ${process.env.PGUSER || 'postgres'}@${process.env.PGHOST || '127.0.0.1'}:${process.env.PGPORT || 5432}/${process.env.PGDATABASE || 'snappy_db'}`);
  } catch (err) {
    console.error(`❌ PostgreSQL Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
