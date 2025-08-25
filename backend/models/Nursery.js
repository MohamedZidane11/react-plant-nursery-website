import mongoose from 'mongoose';

const nurserySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  categories: [{ type: String }],
  location: { type: String, required: true },
  services: [{ type: String }],
  featured: { type: Boolean, default: false },
  discount: { type: Number, default: null },
}, { timestamps: true });

export default mongoose.model('Nursery', nurserySchema);