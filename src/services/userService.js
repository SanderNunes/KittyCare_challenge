const User = require("../models/User");

const findOrCreateUser = async (userData) => {
    try {
        const { email, googleId, name, avatar } = userData;
        let user = await User.findOne({ email });

        if (user) {
            if (!user.googleId) {
                user.googleId = googleId;
                user.name = name;
                user.avatar = avatar; 
                await user.save();
            }
            return user;
        }

        user = new User(userData);
        await user.save();

        return user;
    } catch (error) {
        console.error("Error in findOrCreateUser:", error);
        throw new Error("User creation failed");
    }
};

module.exports = {
    findOrCreateUser,
};
