import jwt from 'jsonwebtoken';

export function generateToken(userData) {
    return jwt.sign({ userId: userData.userId, username: userData.username, role: userData.role }, 'secret', { expiresIn: '1hr'});
}

export function verifyToken(token) {
    try {
       return jwt.verify(token, 'secret');
    }
    catch(error) {
        throw new Error('Error: '+error);
    }
}

