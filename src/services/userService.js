export const getAllUsers = async () => {
    try {
        return "it works";
    }
    catch(error) {
        throw new Error('Error fetching users');
    }
}

export const findUserById = async (id) => {
    try {
        return "it works with id: "+id;
    }
    catch(error) {
        throw new Error('Error fetching user');
    }  
}  

export const saveUser = async (user) => {
    try {
        return user;
    }
    catch(error) {
        throw new Error('Error saving the new user');
    }  
}

export const updateUserDetails = async (id, user) => {
    try {
        return user.name + " is the new value for the user with the id: "+id;
    }
    catch(error) {
        throw new Error('Error updating the user with the id: '+id);
    }
}

export const removeUser = async (id) => {
    try {
        return "the user with the id "+ id + " was removed";
    }
    catch(error) {
        throw new Error('Error fetching users');

    }   
}