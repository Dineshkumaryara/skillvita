"use client"

import { useEffect, useRef, useState } from "react"
import { WaitlistForm } from "./waitlist-form"

interface Brick {
  x: number
  y: number
  width: number
  height: number
  letter: string
  color: string
  visible: boolean
}

interface Ball {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
}

interface Paddle {
  x: number
  y: number
  width: number
  height: number
}

export function BrickBreakerGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [paddleHits, setPaddleHits] = useState(0)
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false)
  const [formTriggered, setFormTriggered] = useState(false)
  const [lives, setLives] = useState(3)
  const [ballAttached, setBallAttached] = useState(true)
  const [bricksDestroyed, setBricksDestroyed] = useState(0)
  const [showCongrats, setShowCongrats] = useState(false)
  const ballAttachedRef = useRef(true)
  const bricksDestroyedRef = useRef(0)
  const gameStateRef = useRef({
    ball: { x: 0, y: 0, dx: 3, dy: -3, radius: 8 } as Ball,
    paddle: { x: 0, y: 0, width: 100, height: 12 } as Paddle,
    bricks: [] as Brick[],
    animationId: 0,
  })
  const lastTimeRef = useRef<number | null>(null)

  useEffect(() => {
    // Check localStorage for form submission and form trigger
    const formSubmitted = localStorage.getItem("skillvita_form_submitted")
    const formWasTriggered = localStorage.getItem("skillvita_form_triggered")
    
    if (formSubmitted === "true") {
      setHasSubmittedForm(true)
      setFormTriggered(true)
    } else if (formWasTriggered === "true") {
      // Form was triggered but not submitted yet - show it immediately
      setFormTriggered(true)
      setShowForm(true)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initializeGame()
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      const animationId = gameStateRef.current.animationId
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  const initializeGame = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const { ball, paddle, bricks } = gameStateRef.current

    // Initialize paddle
    paddle.x = canvas.width / 2 - paddle.width / 2
    paddle.y = canvas.height - 30

    // Initialize ball on paddle
    ball.x = paddle.x + paddle.width / 2
    ball.y = paddle.y - ball.radius
    ball.dx = 3
    ball.dy = -3

    // Initialize skill chip bricks
    const skills = [
      { name: "React", color: "#3b82f6" },
      { name: "TypeScript", color: "#6366f1" },
      { name: "UI Design", color: "#a855f7" },
      { name: "Next.js", color: "#06b6d4" },
      { name: "Figma", color: "#ec4899" },
      { name: "Node.js", color: "#22c55e" },
      { name: "Python", color: "#eab308" },
      { name: "GraphQL", color: "#f43f5e" },
      { name: "Docker", color: "#0ea5e9" },
      { name: "Vue.js", color: "#10b981" },
      { name: "AWS", color: "#f97316" },
      { name: "MongoDB", color: "#84cc16" },
      { name: "Angular", color: "#ef4444" },
      { name: "Sketch", color: "#f59e0b" },
      { name: "PostgreSQL", color: "#64748b" },
      { name: "Django", color: "#16a34a" },
      { name: "REST API", color: "#2563eb" },
      { name: "Git", color: "#ea580c" },
      { name: "Flask", color: "#6b7280" },
      { name: "Framer", color: "#7c3aed" },
      { name: "CI/CD", color: "#0891b2" },
      { name: "Swift", color: "#dc2626" },
      { name: "Kotlin", color: "#9333ea" },
      { name: "Tailwind", color: "#0ea5e9" },
      { name: "Testing", color: "#059669" },
      { name: "React Native", color: "#1d4ed8" },
      { name: "Agile", color: "#14b8a6" },
      { name: "Flutter", color: "#4f46e5" },
      { name: "JavaScript", color: "#ca8a04" },
      { name: "Scrum", color: "#65a30d" },
      { name: "DevOps", color: "#d97706" },
      { name: "HTML/CSS", color: "#f97316" },
      { name: "Adobe XD", color: "#c026d3" },
      { name: "Wireframing", color: "#9333ea" },
      { name: "UX Research", color: "#8b5cf6" },
      { name: "User Testing", color: "#db2777" },
      { name: "Design Systems", color: "#4f46e5" },
      { name: "Interaction Design", color: "#c026d3" },
      { name: "Visual Design", color: "#e11d48" },
      { name: "Design Thinking", color: "#ec4899" },
      { name: "Prototyping", color: "#14b8a6" },
    ]

    // Responsive brick sizing
    const isMobile = canvas.width < 768
    const brickWidth = isMobile ? 70 : 100
    const brickHeight = isMobile ? 28 : 36
    const spacing = isMobile ? 6 : 10
    const horizontalPadding = isMobile ? 10 : 40
    const columns = Math.floor((canvas.width - horizontalPadding) / (brickWidth + spacing))
    const rows = Math.ceil(skills.length / columns)
    const totalWidth = columns * brickWidth + (columns - 1) * spacing
    const startX = (canvas.width - totalWidth) / 2
    const startY = isMobile ? 20 : 40
    const maxRows = isMobile ? Math.floor((canvas.height * 0.4) / (brickHeight + spacing)) : rows

    bricks.length = 0
    const actualRows = Math.min(rows, maxRows)
    for (let row = 0; row < actualRows; row++) {
      // Create zigzag effect by offsetting alternating rows
      const offset = row % 2 === 1 ? (brickWidth + spacing) / 2 : 0
      
      for (let col = 0; col < columns; col++) {
        const skillIndex = row * columns + col
        if (skillIndex < skills.length) {
          bricks.push({
            x: startX + col * (brickWidth + spacing) + offset,
            y: startY + row * (brickHeight + spacing),
            width: brickWidth,
            height: brickHeight,
            letter: skills[skillIndex].name,
            color: skills[skillIndex].color,
            visible: true,
          })
        }
      }
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!gameStarted || showForm) return
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const { paddle } = gameStateRef.current

    paddle.x = mouseX - paddle.width / 2
    paddle.x = Math.max(0, Math.min(canvas.width - paddle.width, paddle.x))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!gameStarted || showForm) return
    const canvas = canvasRef.current
    if (!canvas) return

    e.preventDefault()
    const rect = canvas.getBoundingClientRect()
    const touch = e.touches[0]
    const touchX = touch.clientX - rect.left
    const { paddle } = gameStateRef.current

    paddle.x = touchX - paddle.width / 2
    paddle.x = Math.max(0, Math.min(canvas.width - paddle.width, paddle.x))
  }

  const handleTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    handleClick()
  }

  const handleClick = () => {
    // Don't allow starting game if form needs to be filled
    if (showForm) return
    
    if (!gameStarted && !showForm) {
      setGameStarted(true)
      setBallAttached(false)
      ballAttachedRef.current = false
      startGame()
    } else if (ballAttached && gameStarted) {
      setBallAttached(false)
      ballAttachedRef.current = false
    }
  }

  const startGame = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const gameLoop = (timestamp: number) => {
      if (showForm || showCongrats) return

      const { ball, paddle, bricks } = gameStateRef.current

      // Time-based movement scaling to keep speed constant across refresh rates
      const prev = lastTimeRef.current
      if (prev === null) {
        lastTimeRef.current = timestamp
      }
      const dt = prev === null ? 1/60 : Math.min((timestamp - prev) / 1000, 0.05)
      lastTimeRef.current = timestamp
      const scale = dt * 60

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw bricks with rounded corners
      const isMobile = canvas.width < 768
      bricks.forEach((brick) => {
        if (brick.visible) {
          const radius = isMobile ? 12 : 18
          
          // Draw rounded rectangle with border
          ctx.beginPath()
          ctx.moveTo(brick.x + radius, brick.y)
          ctx.lineTo(brick.x + brick.width - radius, brick.y)
          ctx.quadraticCurveTo(brick.x + brick.width, brick.y, brick.x + brick.width, brick.y + radius)
          ctx.lineTo(brick.x + brick.width, brick.y + brick.height - radius)
          ctx.quadraticCurveTo(brick.x + brick.width, brick.y + brick.height, brick.x + brick.width - radius, brick.y + brick.height)
          ctx.lineTo(brick.x + radius, brick.y + brick.height)
          ctx.quadraticCurveTo(brick.x, brick.y + brick.height, brick.x, brick.y + brick.height - radius)
          ctx.lineTo(brick.x, brick.y + radius)
          ctx.quadraticCurveTo(brick.x, brick.y, brick.x + radius, brick.y)
          ctx.closePath()
          
          // Fill with color (semi-transparent)
          ctx.fillStyle = brick.color + "40"
          ctx.fill()
          
          // Draw border
          ctx.strokeStyle = brick.color
          ctx.lineWidth = isMobile ? 1.5 : 2
          ctx.stroke()
          
          // Draw skill name
          ctx.fillStyle = brick.color
          ctx.font = isMobile ? "bold 10px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" : "bold 13px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          // Enable better text rendering
          ctx.imageSmoothingEnabled = true
          ctx.imageSmoothingQuality = "high"
          ctx.fillText(brick.letter, brick.x + brick.width / 2, brick.y + brick.height / 2)
        }
      })

      // Draw paddle
      ctx.fillStyle = "#3b82f6"
      ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height)

      // Draw ball
      ctx.beginPath()
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()
      ctx.strokeStyle = "#3b82f6"
      ctx.lineWidth = 2
      ctx.stroke()
      ctx.closePath()

      // If ball is attached, keep it on paddle
      if (ballAttachedRef.current) {
        ball.x = paddle.x + paddle.width / 2
        ball.y = paddle.y - ball.radius
      } else {
        // Move ball using time-based scaling (baseline 60fps)
        ball.x += ball.dx * scale
        ball.y += ball.dy * scale
      }

      // Wall collision
      if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx
      }
      if (ball.y - ball.radius < 0) {
        ball.dy = -ball.dy
      }

      // Paddle collision
      if (
        ball.y + ball.radius > paddle.y &&
        ball.x > paddle.x &&
        ball.x < paddle.x + paddle.width &&
        ball.dy > 0
      ) {
        ball.dy = -ball.dy
        
        // Increment paddle hits
        const newHits = paddleHits + 1
        setPaddleHits(newHits)
      }

      // Brick collision
      bricks.forEach((brick) => {
        if (brick.visible) {
          if (
            ball.x > brick.x &&
            ball.x < brick.x + brick.width &&
            ball.y - ball.radius < brick.y + brick.height &&
            ball.y + ball.radius > brick.y
          ) {
            ball.dy = -ball.dy
            brick.visible = false
            
            // Track bricks destroyed
            bricksDestroyedRef.current += 1
            setBricksDestroyed(bricksDestroyedRef.current)
            
            // Show form after 3 bricks destroyed (only first time)
            if (bricksDestroyedRef.current === 3 && !hasSubmittedForm && !formTriggered) {
              setFormTriggered(true)
              setShowForm(true)
              // Store in localStorage so form persists on refresh
              localStorage.setItem("skillvita_form_triggered", "true")
              // Reset ball to paddle when form shows
              ball.x = paddle.x + paddle.width / 2
              ball.y = paddle.y - ball.radius
              ball.dx = 3
              ball.dy = -3
              setBallAttached(true)
              ballAttachedRef.current = true
              return
            }
            
            // Check if all bricks are cleared
            const remainingBricks = bricks.filter(b => b.visible).length - 1
            if (remainingBricks === 0) {
              setShowCongrats(true)
              return
            }
          }
        }
      })

      // Ball falls below paddle (lose life and reset)
      if (ball.y + ball.radius > canvas.height && !ballAttachedRef.current) {
        setLives(prev => {
          const newLives = prev - 1
          if (newLives <= 0) {
            // Game over - reset everything
            setGameStarted(false)
            setLives(3)
            setPaddleHits(0)
            setBricksDestroyed(0)
            bricksDestroyedRef.current = 0
            initializeGame()
            return 3
          }
          return newLives
        })
        
        // Reset ball on paddle
        ball.x = paddle.x + paddle.width / 2
        ball.y = paddle.y - ball.radius
        ball.dx = 3
        ball.dy = -3
        setBallAttached(true)
        ballAttachedRef.current = true
      }

      gameStateRef.current.animationId = requestAnimationFrame(gameLoop)
    }

    lastTimeRef.current = null
    gameStateRef.current.animationId = requestAnimationFrame(gameLoop)
  }

  const handleFormClose = () => {
    setShowForm(false)
    setHasSubmittedForm(true)
    localStorage.setItem("skillvita_form_submitted", "true")
    // Clear the form triggered flag since it's now submitted
    localStorage.removeItem("skillvita_form_triggered")
    // Resume game
    startGame()
  }

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair touch-none"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouch}
        style={{ display: "block" }}
      />
      
      {!gameStarted && !showForm && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white text-center bg-black/50 px-6 py-4 rounded-lg mx-4">
            <p className="text-xl font-bold mb-2">Tap to Start Game</p>
            <p className="text-sm">Move finger/mouse to control paddle</p>
          </div>
        </div>
      )}
      
      {gameStarted && ballAttached && !showForm && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white text-center bg-black/50 px-6 py-4 rounded-lg mx-4">
            <p className="text-lg font-bold">Tap to Launch Ball</p>
          </div>
        </div>
      )}

      {showForm && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative">
            <WaitlistForm onSubmit={() => setHasSubmittedForm(true)} />
            {hasSubmittedForm && (
              <button
                onClick={handleFormClose}
                className="mt-4 text-white hover:text-gray-300 text-center w-full"
              >
                Continue Game →
              </button>
            )}
          </div>
        </div>
      )}

      {gameStarted && !showForm && (
        <div className="absolute top-2 left-2 text-white text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded flex gap-2 sm:gap-4">
          <span>Lives: {lives}</span>
          <span>Bricks: {bricksDestroyed}</span>
        </div>
      )}

      {showCongrats && (
        <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="text-center px-6 py-8 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg border-2 border-green-500 mx-4">
            <h2 className="text-4xl sm:text-6xl font-bold text-green-400 mb-4">🎉 Congratulations! 🎉</h2>
            <p className="text-xl sm:text-2xl text-white mb-6">You&apos;ve cleared all the bricks!</p>
            <button
              onClick={() => {
                setShowCongrats(false)
                setGameStarted(false)
                setLives(3)
                setPaddleHits(0)
                setBricksDestroyed(0)
                bricksDestroyedRef.current = 0
                setBallAttached(true)
                ballAttachedRef.current = true
                initializeGame()
              }}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
