const { createAdminData } = require('./admin');
const { createDoctorData } = require('./doctor');
const { createVaccineData } = require('./vaccine');
const { Time } = require('./Time');
const { connection, connect, set } = require('mongoose');
set('strictQuery', false);

connect(
  'mongodb+srv://Jitheesh:123321jk@atlas.suwnyzz.mongodb.net/PatientManagement',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const createSeeder = async () => {
  await createAdminData();
  await createDoctorData();
  await createVaccineData();
  await Time();
  connection.close();
};
createSeeder();
