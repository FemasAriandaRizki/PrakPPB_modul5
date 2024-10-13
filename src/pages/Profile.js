// Profile.js
import React, { useState, useEffect } from "react";
import CardFollower from "../components/CardFollower";
import "./Profile.css";

export default function Profile() {
    const [followerData, setFollowerData] = useState([]);
    const usernames = ["FemasAriandaRizki", "rifkiroboth", "aakbrr"];

    useEffect(() => {
        const fetchFollowerData = async () => {
            try {
                const fetchedData = await Promise.all(
                    usernames.map(async (username) => {
                        const response = await fetch(
                            `https://api.github.com/users/${username}`
                        );
                        const data = await response.json();

                        return {
                            name: username,
                            followers: data.followers,
                            avatar: data.avatar_url,
                            profileLink: `https://github.com/${username}`,
                        };
                    })
                );

                setFollowerData(fetchedData);
            } catch (error) {
                console.error("Error fetching follower data:", error);
            }
        };

        fetchFollowerData();
    }, [usernames]);

    return (
        <div className="profile-page">
            <div className="follower-list">
                {followerData.map((follower, index) => (
                    <CardFollower
                        key={index}
                        name={follower.name}
                        followers={follower.followers}
                        avatar={follower.avatar}
                        profileLink={follower.profileLink}
                    />
                ))}
            </div>
        </div>
    );
}
