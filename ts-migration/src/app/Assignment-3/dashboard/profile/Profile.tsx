"use client";

const Profile = () => {
  const user = {
    name: "Vaishnavi",
    email: "abc@gmail.com",
    role: "User",
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#f9fafb",
      }}
    >
      <h2 style={{ marginBottom: "16px", fontSize: "24px", color: "#111827" }}>
        Profile
      </h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
};

export default Profile;
