const time = require('../time');

exports.Time = async (req, res) => {
  try {
    const timeData = [
      { time: '9.00am' },
      { time: '10.00am' },
      { time: '11.00am' },
      { time: '12.00pm' },
      { time: '2.00pm' },
      { time: '3.00pm' },
      { time: '4.00pm' },
      { time: '5.00pm' },
    ];
    const existingDoc = await time.find();
    if (existingDoc >= 0) {
      await time.insertMany(timeData);
      console.log(`Data created successfully`);
    } else {
      console.log(`Data already exists`);
    }
  } catch (error) {
    console.log(error);
  }
};
