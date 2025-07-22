"use client"
import React, { useReducer } from 'react';

interface VotingState {
  [key: string]: number;
}

interface VotingAction {
  type: 'VOTE';
  option: string;
}

const initialState: VotingState = {
  'Option A': 0,
  'Option B': 0,
  'Option C': 0,
};

const votingReducer = (state: VotingState, action: VotingAction): VotingState => {
  switch (action.type) {
    case 'VOTE':
      return {
        ...state,
        [action.option]: state[action.option] + 1,
      };
    default:
      return state;
  }
};

const VotingApp: React.FC = () => {
  const [votes, dispatch] = useReducer(votingReducer, initialState);

  const handleVote = (option: string) => {
    dispatch({ type: 'VOTE', option });
  };

  return (
    <div>
      <h1>Voting Application</h1>
      
      <div>
        {Object.keys(votes).map((option) => (
          <div key={option}>
            <button onClick={() => handleVote(option)}>
              Vote for {option}
            </button>
          </div>
        ))}
      </div>

      <div>
        <h2>Vote Counts</h2>
        {Object.entries(votes).map(([option, count]) => (
          <div key={option}>
            {option}: {count}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingApp;