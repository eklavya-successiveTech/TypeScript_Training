// 2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
// Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
// Create multiple instances of the UserCard component with different user data.

import Image from 'next/image';

type Props = {
    name: string;
    email: string;
    avatarURL: string;
};

const UserCard = ({ name, email, avatarURL }: Props) => {
    return (
        <>
            <div
               className='cardStyle'
            >
                <Image 
                    src={avatarURL} 
                    alt="User avatar" 
                    width={100} 
                    height={100} 
                    className="imageStyle"
                    priority={true} 
                />
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
            </div>
        </>
    );
};

export default UserCard;
