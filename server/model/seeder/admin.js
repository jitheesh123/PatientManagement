const login = require('../login');
const signup = require('../signup');

const {
  GeneratePasswordAndHash,
} = require('../../modules/GeneratePasswordAndHash');

exports.createAdminData = async (req, res) => {
  try {
    let { PasswordInPlainText, HashedPassword, salt } =
      await GeneratePasswordAndHash('Admin@123');
    const adminSeed = {
      Name: 'Admin123',
      Email: 'admin123@gmail.com',
      Password: HashedPassword,
      Role: 'Admin',
      PhoneNumber: '+91 9645757485',
      salt,
    };
    const existingDoc = await login.findOne({ Email: adminSeed.Email });
    if (!existingDoc) {
      const loginData = await login.create({
        Email: adminSeed.Email,
        Password: adminSeed.Password,
        salt: adminSeed.salt,
      });

      const signupData = await signup.create({
        Name: adminSeed.Name,
        Role: adminSeed.Role,
        PhoneNumber: adminSeed.PhoneNumber,
        LoginId: loginData.id,
      });

      console.log(`Admin created successfully`);
    } else {
      console.log(`Admin already exists`);
    }
  } catch (error) {
    console.log(error);
  }
};
