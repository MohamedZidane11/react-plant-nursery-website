import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ type: String }],
  endDate: { type: String, required: true }, // Keep as string for Arabic dates
  discount: { type: Number, default: null },
  highlighted: { type: Boolean, default: false },
  nurseryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Nursery' },
}, { timestamps: true });

export default mongoose.model('Offer', offerSchema);