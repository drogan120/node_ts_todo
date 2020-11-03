import bcrypt from 'bcrypt'


class PasswordHash {

    public static hash = (password: string): Promise<string> => {
        return bcrypt.hash(password, 12);

    }
}

export default PasswordHash;