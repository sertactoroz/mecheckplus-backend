import mongoose from 'mongoose';
import { Checklist } from '../models/Checklist';
import dotenv from "dotenv";
dotenv.config();
// console.log("🔍 process.env PORT:", process.env.PORT);



const PORT = process.env.PORT || 5001;
// console.log('Port:', PORT);

const MONGO_URI = process.env.MONGODB_URI || "";
const seedChecklist = async () => {
  try {
    // MongoDB bağlantısı (kendi connection string'inizi kullanın)
mongoose
  .connect(MONGO_URI);

    const sampleChecklist = new Checklist({
      user: '5db1c37e4a68c31f10cf0a9f', // Gerçek bir User ID'si kullanın
      title: 'Günlük Rutin Checklist',
      tasks: [
        {
          taskDefinition: new mongoose.Types.ObjectId(), // Gerçek TaskDefinition ID'si
          customTitle: 'Su İçmek',
          isCompleted: false,
          value: 8,
          unit: 'bardak',
          note: 'Günde en az 8 bardak su içmeyi hedefliyorum'
        },
        {
          taskDefinition: new mongoose.Types.ObjectId(),
          customTitle: 'Egzersiz',
          isCompleted: true,
          value: 30,
          unit: 'dakika',
          note: '30 dakika yürüyüş yaptım'
        },
        {
          taskDefinition: new mongoose.Types.ObjectId(),
          customTitle: 'Kitap Okuma',
          isCompleted: false,
          value: 20,
          unit: 'sayfa',
          note: 'Akşam kitap okuma zamanı'
        }
      ],
      dailyGoalLevels: {
        great: 80,
        good: 60,
        okay: 30
      }
    });

    const savedChecklist = await sampleChecklist.save();
    console.log('Örnek checklist kaydedildi:', savedChecklist);
    
    process.exit(0);
  } catch (error) {
    console.error('Hata:', error);
    process.exit(1);
  }
};

seedChecklist();
