const User = require('../model/login');
exports.GeneratePasswordAndHash = async (Pass) => {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  if (!Pass)
    PasswordInPlainText = Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join('');
  else PasswordInPlainText = Pass;
  const salt = await User.generateSalt();
  let HashedPassword = await User.hashPassword(PasswordInPlainText, salt);
  return { PasswordInPlainText, HashedPassword, salt };
};
