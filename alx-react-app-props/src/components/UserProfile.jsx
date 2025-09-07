import { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = ({name, age, bio}) => {
    const user = useContext(UserContext);
    return (
        <>
        <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Bio: {bio}</p>
        </div>
        <UserContext />
        </>
    
    );
};
export default UserProfile;