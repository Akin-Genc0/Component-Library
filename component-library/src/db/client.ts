import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'

const connectionString = process.env.DIRECT_URL ?? process.env.DATABASE_URL

const adapter = new PrismaNeon({ connectionString })
export const prisma = new PrismaClient({ adapter })