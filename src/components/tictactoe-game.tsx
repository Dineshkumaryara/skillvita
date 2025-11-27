'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

type Player = 'X' | 'O' | null;
type Board = Player[];

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

export function TicTacToeGame() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost' | 'draw'>('playing');
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [showNameForm, setShowNameForm] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [playerEmail, setPlayerEmail] = useState('');
  const [playerPhone, setPlayerPhone] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);
  const [lastGameResult, setLastGameResult] = useState<'won' | 'lost' | 'draw' | null>(null);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Validation functions
  const validateName = (name: string): string => {
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    if (/\d{3,}/.test(name) || /012|123|234|345|456|567|678|789|890/.test(name)) {
      return 'Name cannot contain sequential numbers';
    }
    if (/(.)\1{3,}/.test(name)) {
      return 'Name cannot contain too many repeated characters';
    }
    if (/(.{1,3})\1{3,}/.test(name)) {
      return 'Name contains suspicious patterns';
    }
    if (!/[a-zA-Z]/.test(name)) {
      return 'Name must contain at least one letter';
    }
    if (/([a-zA-Z])\1{4,}/i.test(name)) {
      return 'Name cannot have too many consecutive same letters';
    }
    return '';
  };

  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    const localPart = email.split('@')[0];
    if (/012|123|234|345|456|567|678|789/.test(localPart)) {
      return 'Email contains suspicious number patterns';
    }
    if (/(.)\1{4,}/.test(localPart)) {
      return 'Email contains too many repeated characters';
    }
    if (/^(test|fake|dummy|spam|trash|temp)/i.test(localPart)) {
      return 'Please use a real email address';
    }
    return '';
  };

  const validatePhone = (phone: string): string => {
    const cleanNumber = phone.replace(/[\s\-()]/g, '');
    if (!/^\+?\d+$/.test(cleanNumber)) {
      return 'Phone number can only contain digits';
    }
    if (cleanNumber.replace(/^\+/, '').length < 10) {
      return 'Phone number must be at least 10 digits';
    }
    if (/0123456789|1234567890|0987654321|9876543210/.test(cleanNumber)) {
      return 'Phone number cannot be sequential';
    }
    if (/^\+?(\d)\1{9,}$/.test(cleanNumber)) {
      return 'Phone number cannot be all the same digit';
    }
    if (/(\d)\1{5,}/.test(cleanNumber)) {
      return 'Phone number contains too many repeated digits';
    }
    return '';
  };

  // Load data from localStorage on mount
  useEffect(() => {
    const savedName = localStorage.getItem('tictactoe_player_name');
    const savedEmail = localStorage.getItem('tictactoe_player_email');
    const savedPhone = localStorage.getItem('tictactoe_player_phone');
    const savedContactSubmitted = localStorage.getItem('tictactoe_contact_submitted');
    const savedContactFormShown = localStorage.getItem('tictactoe_contact_form_shown');
    const savedGamesPlayed = localStorage.getItem('tictactoe_games_played');
    const savedWins = localStorage.getItem('tictactoe_wins');
    const savedLosses = localStorage.getItem('tictactoe_losses');
    const savedDraws = localStorage.getItem('tictactoe_draws');

    if (savedName) {
      setPlayerName(savedName);
      setIsNameSubmitted(true);
      setShowNameForm(false);
    }

    if (savedContactSubmitted === 'true') {
      setPlayerEmail(savedEmail || '');
      setPlayerPhone(savedPhone || '');
      setIsContactSubmitted(true);
      setShowContactForm(false);
    } else if (savedContactFormShown === 'true') {
      // Contact form was shown but not submitted - show it again
      setShowContactForm(true);
      setPlayerEmail(savedEmail || '');
      setPlayerPhone(savedPhone || '');
    }

    if (savedGamesPlayed) setGamesPlayed(parseInt(savedGamesPlayed));
    if (savedWins) setWins(parseInt(savedWins));
    if (savedLosses) setLosses(parseInt(savedLosses));
    if (savedDraws) setDraws(parseInt(savedDraws));
  }, []);

  const checkWinner = (currentBoard: Board): { winner: Player; line: number[] | null } => {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return { winner: currentBoard[a], line: combination };
      }
    }
    return { winner: null, line: null };
  };

  const isBoardFull = (currentBoard: Board): boolean => {
    return currentBoard.every(cell => cell !== null);
  };

  const getAvailableMoves = (currentBoard: Board): number[] => {
    return currentBoard.map((cell, index) => cell === null ? index : -1).filter(index => index !== -1);
  };

  const minimax = (currentBoard: Board, depth: number, isMaximizing: boolean): number => {
    const { winner } = checkWinner(currentBoard);

    if (winner === 'O') return 10 - depth;
    if (winner === 'X') return depth - 10;
    if (isBoardFull(currentBoard)) return 0;

    const availableMoves = getAvailableMoves(currentBoard);

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (const move of availableMoves) {
        const newBoard = [...currentBoard];
        newBoard[move] = 'O';
        const score = minimax(newBoard, depth + 1, false);
        bestScore = Math.max(score, bestScore);
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (const move of availableMoves) {
        const newBoard = [...currentBoard];
        newBoard[move] = 'X';
        const score = minimax(newBoard, depth + 1, true);
        bestScore = Math.min(score, bestScore);
      }
      return bestScore;
    }
  };

  const getBestMove = (currentBoard: Board): number => {
    let bestScore = -Infinity;
    let bestMove = -1;
    const availableMoves = getAvailableMoves(currentBoard);

    for (const move of availableMoves) {
      const newBoard = [...currentBoard];
      newBoard[move] = 'O';
      const score = minimax(newBoard, 0, false);
      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
    }

    return bestMove;
  };

  // Get a suboptimal move to help user win
  const getSuboptimalMove = (currentBoard: Board): number => {
    const availableMoves = getAvailableMoves(currentBoard);

    // First, check if user can win on next move and DON'T block them
    for (const move of availableMoves) {
      const testBoard = [...currentBoard];
      testBoard[move] = 'X';
      const { winner } = checkWinner(testBoard);
      if (winner === 'X') {
        // User can win here - pick a different move
        const otherMoves = availableMoves.filter(m => m !== move);
        if (otherMoves.length > 0) {
          return otherMoves[Math.floor(Math.random() * otherMoves.length)];
        }
      }
    }

    // Otherwise just pick a random move that's not optimal
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  };

  const handleCellClick = (index: number) => {
    if (board[index] || !isPlayerTurn || gameStatus !== 'playing') return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    const { winner, line } = checkWinner(newBoard);
    if (winner === 'X') {
      setGameStatus('won');
      setWinningLine(line);
      setLastGameResult('won');
      const newWins = wins + 1;
      setWins(newWins);
      localStorage.setItem('tictactoe_wins', newWins.toString());

      const newGamesPlayed = gamesPlayed + 1;
      setGamesPlayed(newGamesPlayed);
      localStorage.setItem('tictactoe_games_played', newGamesPlayed.toString());

      if (gamesPlayed === 0 && !isContactSubmitted) {
        setShowContactForm(true);
        localStorage.setItem('tictactoe_contact_form_shown', 'true');
      }
      return;
    }

    if (isBoardFull(newBoard)) {
      setGameStatus('draw');
      setLastGameResult('draw');
      const newDraws = draws + 1;
      setDraws(newDraws);
      localStorage.setItem('tictactoe_draws', newDraws.toString());

      const newGamesPlayed = gamesPlayed + 1;
      setGamesPlayed(newGamesPlayed);
      localStorage.setItem('tictactoe_games_played', newGamesPlayed.toString());

      if (gamesPlayed === 0 && !isContactSubmitted) {
        setShowContactForm(true);
        localStorage.setItem('tictactoe_contact_form_shown', 'true');
      }
      return;
    }

    setIsPlayerTurn(false);
  };

  useEffect(() => {
    if (!isPlayerTurn && gameStatus === 'playing') {
      const timer = setTimeout(() => {
        // If user lost last game, use suboptimal move to help them win
        const move = lastGameResult === 'lost' ? getSuboptimalMove(board) : getBestMove(board);
        const newBoard = [...board];
        newBoard[move] = 'O';
        setBoard(newBoard);

        const { winner, line } = checkWinner(newBoard);
        if (winner === 'O') {
          setGameStatus('lost');
          setWinningLine(line);
          setLastGameResult('lost');
          setLosses(prev => {
            const newLosses = prev + 1;
            localStorage.setItem('tictactoe_losses', newLosses.toString());
            return newLosses;
          });

          setGamesPlayed(prev => {
            const newGamesPlayed = prev + 1;
            localStorage.setItem('tictactoe_games_played', newGamesPlayed.toString());
            return newGamesPlayed;
          });

          if (gamesPlayed === 0 && !isContactSubmitted) {
            setShowContactForm(true);
            localStorage.setItem('tictactoe_contact_form_shown', 'true');
          }
          return;
        }

        if (isBoardFull(newBoard)) {
          setGameStatus('draw');
          setLastGameResult('draw');
          setDraws(prev => {
            const newDraws = prev + 1;
            localStorage.setItem('tictactoe_draws', newDraws.toString());
            return newDraws;
          });

          setGamesPlayed(prev => {
            const newGamesPlayed = prev + 1;
            localStorage.setItem('tictactoe_games_played', newGamesPlayed.toString());
            return newGamesPlayed;
          });

          if (gamesPlayed === 0 && !isContactSubmitted) {
            setShowContactForm(true);
            localStorage.setItem('tictactoe_contact_form_shown', 'true');
          }
          return;
        }

        setIsPlayerTurn(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, board, gameStatus, gamesPlayed, lastGameResult]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameStatus('playing');
    setWinningLine(null);
  };

  const getStatusMessage = () => {
    switch (gameStatus) {
      case 'won':
        return '🎉 You Won!';
      case 'lost':
        return '💻 Computer Won!';
      case 'draw':
        return '🤝 It\'s a Draw!';
      default:
        return isPlayerTurn ? '🎮 Your Turn (X)' : '🤖 Computer\'s Turn (O)';
    }
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameError = validateName(playerName);

    if (nameError) {
      setErrors({ ...errors, name: nameError });
      return;
    }

    localStorage.setItem('tictactoe_player_name', playerName.trim());
    setIsNameSubmitted(true);
    setShowNameForm(false);
    setErrors({ ...errors, name: '' });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailError = validateEmail(playerEmail);
    const phoneError = validatePhone(playerPhone);

    setErrors({
      ...errors,
      email: emailError,
      phone: phoneError,
    });

    if (emailError || phoneError) {
      return;
    }

    // Post to backend
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5002';
      const response = await fetch(`${backendUrl}/skillvita/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: playerName,
          email: playerEmail.trim(),
          number: playerPhone.trim(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log('Contact submitted successfully:', result);
        localStorage.setItem('tictactoe_player_email', playerEmail.trim());
        localStorage.setItem('tictactoe_player_phone', playerPhone.trim());
        localStorage.setItem('tictactoe_contact_submitted', 'true');
        localStorage.removeItem('tictactoe_contact_form_shown');
        setIsContactSubmitted(true);
        setShowContactForm(false);
      } else {
        console.error('Failed to submit contact:', result);
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting contact:', error);
      alert('Error submitting. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-4 bg-black">
      {/* Name Form at Start */}
      {showNameForm && (
        <div className="flex items-center justify-center w-full p-4">
          <div className="p-8 max-w-md w-full border-2 rounded-lg bg-gray-900/50 backdrop-blur-sm" style={{ borderColor: '#32FE6B' }}>
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold mb-2" style={{ color: '#32FE6B' }}>Tic-Tac-Toe</h2>
              <p className="text-gray-400 mb-2">Play a game to unlock E-books</p>
              <p className="text-sm text-gray-500">Enter your name to start playing!</p>
            </div>

            <form onSubmit={handleNameSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="playerName" className="block text-sm font-medium mb-2" style={{ color: '#32FE6B' }}>
                  Your Name
                </label>
                <Input
                  id="playerName"
                  type="text"
                  value={playerName}
                  onChange={(e) => {
                    setPlayerName(e.target.value);
                    if (errors.name) {
                      setErrors({ ...errors, name: '' });
                    }
                  }}
                  placeholder="Enter your name"
                  className="w-full bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-500"
                  style={{
                    borderColor: '#014051',
                    '--tw-ring-color': '#32FE6B',
                    color: 'white'
                  } as React.CSSProperties}
                  onFocus={(e) => e.target.style.borderColor = '#32FE6B'}
                  onBlur={(e) => e.target.style.borderColor = '#014051'}
                  required
                />
                {errors.name && (
                  <p className="text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full font-semibold text-black border-2 transition-all"
                style={{ backgroundColor: '#32FE6B', borderColor: '#32FE6B' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2de55f';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#32FE6B';
                }}
              >
                Start Game
              </Button>
            </form>
            <p className="text-center text-xs text-gray-500 mt-4">Sent straight into your email</p>
          </div>
        </div>
      )}

      {/* Contact Form after first game */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="p-8 max-w-md w-full border-2 rounded-lg" style={{ borderColor: '#32FE6B' }}>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#32FE6B' }}>🎉 Great Game, {playerName}!</h2>
              <p className="text-gray-400">Share your contact to continue playing</p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="playerEmail" className="block text-sm font-medium mb-2" style={{ color: '#32FE6B' }}>
                  Email
                </label>
                <Input
                  id="playerEmail"
                  type="email"
                  value={playerEmail}
                  onChange={(e) => {
                    setPlayerEmail(e.target.value);
                    if (errors.email) {
                      setErrors({ ...errors, email: '' });
                    }
                  }}
                  placeholder="your@email.com"
                  className="w-full bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-500"
                  style={{
                    borderColor: '#014051',
                    '--tw-ring-color': '#32FE6B',
                    color: 'white'
                  } as React.CSSProperties}
                  onFocus={(e) => e.target.style.borderColor = '#32FE6B'}
                  onBlur={(e) => e.target.style.borderColor = '#014051'}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="playerPhone" className="block text-sm font-medium mb-2" style={{ color: '#32FE6B' }}>
                  Phone Number
                </label>
                <Input
                  id="playerPhone"
                  type="tel"
                  value={playerPhone}
                  onChange={(e) => {
                    setPlayerPhone(e.target.value);
                    if (errors.phone) {
                      setErrors({ ...errors, phone: '' });
                    }
                  }}
                  placeholder="+91 98765 43210"
                  className="w-full bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-500"
                  style={{
                    borderColor: '#014051',
                    '--tw-ring-color': '#32FE6B',
                    color: 'white'
                  } as React.CSSProperties}
                  onFocus={(e) => e.target.style.borderColor = '#32FE6B'}
                  onBlur={(e) => e.target.style.borderColor = '#014051'}
                  required
                />
                {errors.phone && (
                  <p className="text-sm text-red-400">{errors.phone}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full font-semibold text-black border-2 transition-all"
                style={{ backgroundColor: '#32FE6B', borderColor: '#32FE6B' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2de55f';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#32FE6B';
                }}
              >
                Continue Playing
              </Button>
            </form>
          </div>
        </div>
      )}

      {!showNameForm && (
        <div className="p-8 bg-black">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-white mb-2">Tic-Tac-Toe</h1>
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            You are <span className="font-semibold" style={{ color: '#014051' }}>X</span>, Computer is <span className="font-semibold" style={{ color: '#32FE6B' }}>O</span>
          </p>
          {isNameSubmitted && playerName && (
            <p className="text-green-400 text-sm mt-1">Welcome, {playerName}! 👋</p>
          )}
        </div>

        {/* Stats */}
        {isContactSubmitted && (
          <div className="mb-6 flex justify-center gap-6">
            <div className="text-center">
              <div className="text-green-400 font-bold text-2xl">{wins}</div>
              <div className="text-gray-400 text-base">Wins</div>
            </div>
            <div className="text-center">
              <div className="text-red-400 font-bold text-2xl">{losses}</div>
              <div className="text-gray-400 text-base">Losses</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 font-bold text-2xl">{draws}</div>
              <div className="text-gray-400 text-base">Draws</div>
            </div>
          </div>
        )}
        <div className="mb-6 text-center">
          <p className={`text-xl font-semibold`} style={{ color: gameStatus === 'won' ? '#22c55e' : gameStatus === 'lost' ? '#ef4444' : gameStatus === 'draw' ? '#eab308' : '#32FE6B' }}>
            {getStatusMessage()}
          </p>
        </div>

        {/* Game Board with fixed size cells */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleCellClick(index)}
              disabled={!isPlayerTurn || gameStatus !== 'playing' || cell !== null}
              className={`
                w-24 h-24 text-5xl font-bold rounded-xl
                transition-all duration-200 flex items-center justify-center overflow-hidden
                ${winningLine?.includes(index)
                  ? 'bg-gradient-to-br from-yellow-500/40 to-orange-500/40 border-yellow-400/60'
                  : 'bg-gray-800/40 border-gray-600/40'
                }
                ${!cell && isPlayerTurn && gameStatus === 'playing' ? 'cursor-pointer hover:bg-gray-700/60 hover:border-blue-500/60' : 'cursor-not-allowed'}
                border-2
                disabled:opacity-60
                hover:scale-105 active:scale-95
                shadow-lg
                backdrop-blur-sm
              `}
            >
              {cell === 'O' ? (
                <img
                  src="/assets/skillvita_icon.svg"
                  alt="O"
                  width="60"
                  height="60"
                  className="animate-in zoom-in duration-200"
                  style={{
                    opacity: 1,
                    filter: 'none',
                    objectFit: 'contain',
                    color: 'inherit',
                    mixBlendMode: 'normal'
                  }}
                />
              ) : cell === 'X' ? (
                <span style={{ color: '#014051' }}>{cell}</span>
              ) : (
                ''
              )}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <Button
            onClick={resetGame}
            className="w-full font-semibold text-black border-2 transition-all"
            style={{ backgroundColor: '#32FE6B', borderColor: '#32FE6B' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2de55f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#32FE6B';
            }}
          >
            New Game
          </Button>
        </div>
        </div>
      )}
    </div>
  );
}
