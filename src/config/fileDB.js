import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const DATA_DIR = path.join(process.cwd(), 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const GIGS_FILE = path.join(DATA_DIR, 'gigs.json');

// Ensure data directory exists
const ensureDataDir = async () => {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
};

// Read data from file
const readData = async (filename) => {
  await ensureDataDir();
  try {
    const data = await fs.readFile(filename, 'utf8');
    return JSON.parse(data);
  } catch {
    // If file doesn't exist, return empty array
    return [];
  }
};

// Write data to file
const writeData = async (filename, data) => {
  await ensureDataDir();
  await fs.writeFile(filename, JSON.stringify(data, null, 2));
};

// Generate ObjectId-like string
const generateObjectId = () => uuidv4();

// User operations
export const UserOperations = {
  async findOne(query) {
    const users = await readData(USERS_FILE);
    return users.find(user => {
      if (query.email) return user.email === query.email;
      if (query._id) return user._id === query._id;
      return false;
    });
  },

  async create(userData) {
    const users = await readData(USERS_FILE);
    const newUser = {
      _id: generateObjectId(),
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    users.push(newUser);
    await writeData(USERS_FILE, users);
    return newUser;
  },

  async findById(id) {
    const users = await readData(USERS_FILE);
    return users.find(user => user._id === id);
  },

  async findByIdAndUpdate(id, updateData) {
    const users = await readData(USERS_FILE);
    const index = users.findIndex(user => user._id === id);
    
    if (index === -1) return null;
    
    users[index] = {
      ...users[index],
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    
    await writeData(USERS_FILE, users);
    return users[index];
  }
};

// Gig operations
export const GigOperations = {
  async find(query = {}) {
    const gigs = await readData(GIGS_FILE);
    let filteredGigs = gigs;
    
    if (query.user) {
      filteredGigs = filteredGigs.filter(gig => gig.user === query.user);
    }
    
    return filteredGigs;
  },

  async findById(id) {
    const gigs = await readData(GIGS_FILE);
    return gigs.find(gig => gig._id === id);
  },

  async create(gigData) {
    const gigs = await readData(GIGS_FILE);
    const newGig = {
      _id: generateObjectId(),
      ...gigData,
      dateApplied: gigData.dateApplied || new Date().toISOString(),
      status: gigData.status || 'Applied',
      excitement: gigData.excitement || 3,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    gigs.push(newGig);
    await writeData(GIGS_FILE, gigs);
    return newGig;
  },

  async findByIdAndUpdate(id, updateData) {
    const gigs = await readData(GIGS_FILE);
    const index = gigs.findIndex(gig => gig._id === id);
    
    if (index === -1) return null;
    
    gigs[index] = {
      ...gigs[index],
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    
    await writeData(GIGS_FILE, gigs);
    return gigs[index];
  },

  async findByIdAndDelete(id) {
    const gigs = await readData(GIGS_FILE);
    const index = gigs.findIndex(gig => gig._id === id);
    
    if (index === -1) return null;
    
    const deletedGig = gigs.splice(index, 1)[0];
    await writeData(GIGS_FILE, gigs);
    return deletedGig;
  }
};

// Mock connect function for compatibility
export const connectDB = async () => {
  await ensureDataDir();
  console.log('File-based database initialized');
  return Promise.resolve();
};
