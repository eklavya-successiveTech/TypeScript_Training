import Image from 'next/image';

interface UserProps {
  name: string;
  email: string;
  avatarURL: string;
}

export default function UserCard({ name, email, avatarURL }: UserProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        maxWidth: '400px',
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <Image
          src={avatarURL}
          alt={`${name}'s avatar`}
          width={80}
          height={80}
          style={{ borderRadius: '50%' }}
        />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontWeight: 'bold', fontSize: '1.1rem' }}>
          {name}
        </p>
        <p style={{ margin: 0, color: '#555' }}>{email}</p>
      </div>
    </div>
  );
}
