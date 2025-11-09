const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// In a real application, you would store users in a database
const users = [
    {
        id: 1,
        username: 'admin',
        // Password: password123
        password: '$2b$10$lKKB3qKpCWy5BpK1.cmxAeE0/SXYCIZz0K1W.ggHcVH.SX5y2kzxS'
    }
];

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user
        const user = users.find(u => u.username === username);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Verify password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '24h' }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};