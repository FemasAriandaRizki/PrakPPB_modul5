// components/CardFollower.js
import React from "react";
import "./CardProfile.css";

export default function CardFollower({ name, followers, avatar, profileLink }) {
    return (
        <div className="follower-card">
            <h2 className="profile-title">User Profile</h2>
            <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
            <p className="follower-detail">Name: {name}</p>
            <p className="follower-detail">Followers: {followers}</p>
            <a
                href={profileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
            >
                GitHub Profile
            </a>
        </div>
    );
}