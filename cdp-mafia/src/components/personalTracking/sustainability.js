import React from 'react';
import Badges from "./gamification";
import Leaderboard from "./leaderboard";

function EnvironmentalSustainabilityPage() {
    const leaderboardData = [
        { username: 'User1', score: 120 },
        { username: 'User2', score: 95 },
        { username: 'User3', score: 80 },
    ];

    const userBadges = [
        { name: 'Eco Warrior', description: 'Completed 10 sustainability challenges' },
        { name: 'Tree Hugger', description: 'Planted 5 trees' },
    ];

    return (
        <div>
            <Leaderboard leaderboardData={leaderboardData} />
            <Badges userBadges={userBadges} />
        </div>
    );
}

export default EnvironmentalSustainabilityPage;
