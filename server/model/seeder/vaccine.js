const vaccine = require('../vaccine');

exports.createVaccineData = async (req, res) => {
  try {
    const vaccines = [
      { name: 'Yellow Fever Vaccine' },
      { name: 'Typhoid Fever Vaccine' },
      { name: 'Hepatitis A Vaccine' },
      { name: 'Rabies Vaccine' },
      { name: 'Cholera Vaccine' },
      { name: 'Influenza (Flu) Vaccine' },
      { name: 'Tetanus, Diphtheria, and Pertussis (Tdap) Vaccine' },
      { name: 'Human Papillomavirus (HPV) Vaccine (for adults)' },
      { name: 'Japanese Encephalitis Vaccine' },
      { name: 'Varicella (Chickenpox) Vaccine' },
    ];
    const existingDoc = await vaccine.find();
    if (existingDoc >= 0) {
      await vaccine.insertMany(vaccines);
      console.log(`Vaccine created successfully`);
    } else {
      console.log(`Vaccine already exists`);
    }
  } catch (error) {
    console.log(error);
  }
};
